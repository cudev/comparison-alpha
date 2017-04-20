// @flow

const TRUNCATION_CHARACTER: string = '\u2026';
const DELIMITER: string = '';

/** Get lineHeight that is used by passed Element */
function getLineHeight(element: Element): number {
  const computedStyle: CSSStyleDeclaration = getComputedStyle(element);
  let lineHeight: string | number = computedStyle.getPropertyValue('line-height');
  if (lineHeight === 'normal') {
    // Normal line heights vary from browser to browser.
    // The spec recommends a value between 1.0 and 1.2 of the font size.
    lineHeight = parseInt(computedStyle.getPropertyValue('font-size'), 10) * 1.2;
  }
  return parseFloat(lineHeight, 10);
}

/**
 * Calculates the greatest possible height for a text in an element
 * according to the amount of lines and lineHeight.
 */
function getMaxHeight(element: Element, lines: number): number {
  const lineHeight: number = getLineHeight(element);
  return lineHeight * lines;
}

/**
 * Walks DOM nodes and applies a function to each in following order:
 *       6
 *     /  \
 *    5   3
 *   /   / \
 *  4   2   1
 * Right to left, post-order
 */
function postOrderTraverse(node: Node, callback: Function): void {
  // Current element has children, need to go deeper and get last child as a text node
  if (node.childNodes && node.childNodes.length > 0) {
    Array.from(node.childNodes)
      .reverse() // For RTL traversal
      .forEach(child => postOrderTraverse(child, callback));
  }
  callback(node);
}

/**
 * Collects tree into flat array for a seamless iteration.
 * Before:
 *       6
 *     /  \
 *    5   3
 *   /   / \
 *  4   2   1
 * After:
 * [1, 2, 3, 4, 5, 6]
 */
function flattenTree(node: Element): Array<Element> {
  const flattened: Array<Element> = [];
  postOrderTraverse(node, flattened.push.bind(flattened));
  return flattened;
}

// Original element is copied and stored in this cache
const cache: WeakMap<Element, Array<Element>> = new WeakMap();

export default function (container: HTMLElement, lines: number): void {
  const inner: ?HTMLElement = container.children[0];

  if (!inner) {
    throw new Error('Container has wrong child');
  }

  const containerStyle: CSSStyleDeclaration = inner.style;

  // Use native line clamp if supported
  if ('webkitLineClamp' in containerStyle) {
    containerStyle.setProperty('overflow', 'hidden');
    containerStyle.setProperty('text-overflow', 'ellipsis');
    containerStyle.setProperty('display', '-webkit-box');
    containerStyle.setProperty('-webkit-box-orient', 'vertical');
    containerStyle.setProperty('-webkit-line-clamp', `${lines}`);
    return;
  }

  // This array of elements is used for read and stored in the cache
  if (!cache.has(container)) {
    cache.set(container, flattenTree(inner.cloneNode(true)));
  }
  const flattenedOriginal: ?Array<Element> = cache.get(container);
  if (!flattenedOriginal) {
    throw new Error('Cannot use cache');
  }

  // This array of elements contains modified text and is mounted to DOM
  const flattened: Array<Element> = flattenTree(inner);
  const maxHeight: number = getMaxHeight(container, lines);

  /**
   * Applies to each element of cached array,
   * reads original contents from it
   * and modifies contents of actual DOM
   */
  const truncate = ({ nodeValue: originalText }: Node, index: number) => {
    // Array in the cache and array of actual elements
    // share the same structure, therefore we can use index
    // to get appropriate element from the other array
    const actualElement: Node = flattened[index];

    // Do nothing if element isn't textual
    if (actualElement.nodeType !== Node.TEXT_NODE) {
      return;
    }

    // Split text into array of letters.
    const chunks: Array<string> = originalText.split(DELIMITER);
    do {
      let updatedText = chunks.join(DELIMITER);
      if (updatedText.length < originalText.length) {
        updatedText += TRUNCATION_CHARACTER;
      }
      // Write chunks to node
      actualElement.nodeValue = updatedText;

      // Remove last chunk
      chunks.pop();

      // Continue to remove chunks and write them unless it fits properly
    } while (+inner.getBoundingClientRect().height.toFixed(1) > maxHeight && chunks.length);
  };

  flattenedOriginal.forEach(truncate);
}
