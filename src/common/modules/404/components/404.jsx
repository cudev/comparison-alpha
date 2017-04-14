import React from 'react';

import NotFound from '../../not-found/components/not-found';
import HeadTag from '../../core/components/head-tag/components/head-tag';
import config from '../../../config';

const Page = () => (
  <div>
    <HeadTag
      title="404 title"
      description="404 description"
      url={`${config.host}:3000/404`}
      keywords="404 keywords"
    />
    <NotFound
      title="404 Sorry, page not found."
      text="Unfortunately, this page does not exist. Please check your URL or return to the"
      button
    />
  </div>
);

export default Page;
