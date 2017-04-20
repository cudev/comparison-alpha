// @flow
import React from 'react';

import injectSheet from '../../../../client/jss-config';
import Item from '../../item';
import styles from '../styles/item-list';
import fetchData from '../../core/fetch-data';

const Info = Item.components.Info;
const { getEnglishContent } = fetchData;

type AdvertisementProps = {
  sheet: { classes: Object },
  itemData: Array<Object>,
};

const Container = ({
  sheet: { classes },
  itemData,
}: AdvertisementProps) => (
  <div className={classes.container}>
    {
       [...itemData].map(element => (
         <div
           key={element._id}
           className={classes.itemWrapper}
         >
           <Info
             itemName={getEnglishContent(element.name)}
             image={element.images[0]}
             itemSlug={element.slug}
           />
         </div>
        ))
      }
  </div>
  );

export default injectSheet(styles)(Container);
