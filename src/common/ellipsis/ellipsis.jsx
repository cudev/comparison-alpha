// @flow
import React, { Component } from 'react';
import type { Element } from 'react';

import fit from './fit';

type Props = {
  children: ?Element<*>,
  lines: number,
  className: ?string,
}

export default class Ellipsis extends Component {
  container: HTMLElement;

  constructor(props: Props) {
    super(props);

    (this:any).update = this.update.bind(this);
    (this:any).setContainer = this.setContainer.bind(this);
  }

  componentDidMount() {
    this.ellipsis();
    window.addEventListener('resize', this.update);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.update);
  }

  update() {
    this.ellipsis();
    this.forceUpdate();
  }

  ellipsis() {
    fit(this.container, this.props.lines);
  }

  setContainer(element: HTMLElement) {
    this.container = element;
  }

  render() {
    return (
      <div
        ref={this.setContainer}
        className={this.props.className}
      >
        <div>{this.props.children}</div>
      </div>
    );
  }
}
