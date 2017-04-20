import { create as createJss } from 'jss';
import { create as createInjectSheet } from 'react-jss';
import postcssJs from 'postcss-js';
import autoprefixer from 'autoprefixer';
import camelCase from 'jss-camel-case';
import nested from 'jss-nested';

const prefixer = postcssJs.sync([autoprefixer], {});
function addPrefix() {
  return (rule) => {
    const st = prefixer(rule.style);
    const fallbacks = [];
    Object.keys(st).forEach((prop) => {
      if (Array.isArray(st[prop])) {
        const fb = st[prop].map(el => ({ [prop]: el }));
        st[prop] = st[prop][st[prop].length - 1];
        fallbacks.push(...fb);
      }
    });

    if (fallbacks.length) {
      st.fallbacks = fallbacks;
    }
    rule.style = st; // eslint-disable-line no-param-reassign
  };
}

const jss = createJss();
jss.use(addPrefix());
jss.use(nested());
jss.use(camelCase());

export default createInjectSheet(jss);
