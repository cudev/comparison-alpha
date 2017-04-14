import React from 'react';
import Helmet from 'react-helmet';

type HeadTagProps = {
  title: String,
  description: String,
  keywords: String,
  url: String,
};

export default ({
  title,
  description,
  keywords,
  url,
}: HeadTagProps) => (
  <Helmet
    title={title}
    meta={[
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
    ]}
  />
);
