// @flow
import React from 'react';
import { Link } from 'react-router';

import injectSheet from '../../../../client/jss-config';
import styles from '../styles/not-found';

type SearchResultProps = {
  sheet: { classes: Object },
  button: boolean,
  title: string,
  text: string,
};

const Container = ({
  sheet: { classes },
  title,
  text,
  button,
}: SearchResultProps) => (
  <div className={classes.container}>
    <div className={classes.innerContainer}>
      <div className={classes.imageContainer}>
        <img
          alt="cat"
          src="/images/cat.png"
          height="246"
          width="350"
        />
      </div>
      <div className={classes.content}>
        <div className={classes.title}>
          {title}
        </div>
        <div className={classes.textButtonContainer}>
          {
            button ?
              (<div className={classes.text}>
                <span>{text}</span>
                &nbsp;
                <Link
                  to="/"
                  className={classes.button}
                >
                  Home Page
                </Link>
              </div>) :
              (<div className={classes.textSearch}>
                <span>{text}</span>
              </div>)
          }
        </div>
      </div>
    </div>
  </div>
);

export default injectSheet(styles)(Container);
