import 'normalize.css/normalize.css';
import React, { Component } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import classnames from 'classnames';

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Card from 'RenderingEngineSrc/components/Card/Card';
import Icons from 'RenderingEngineSrc/components/Icons';
import ProgressTimer from 'RenderingEngineSrc/components/ProgressTimer/ProgressTimer';
import Label from 'RenderingEngineSrc/components/Label/Label';
import Remove from 'RenderingEngineSrc/components/Remove/Remove';
import Spinner from 'RenderingEngineSrc/components/Spinner/Spinner';
import HeadingContent from 'RenderingEngineSrc/components/Heading/HeadingContent';
import 'RenderingEngineSrc/assets/base_scss/__base.scss';
/* eslint-enable import/no-extraneous-dependencies */
/* eslint-enable import/no-unresolved */
/* eslint-enable import/extensions */

import MosaicContainer from './components/MosaicContainer';
import ContentGridContainer from './components/ContentGridContainer';
import ContentRowContainer from './components/ContentRowContainer';
import LandingContainer from './components/LandingContainer';

import styles from './index.scss';

class RenderingEngine extends Component {
  componentDidMount() {
    // FontFaceObserver
    // Loading web font asynchronously
    // --------------------------------------------------
    const observer = new FontFaceObserver('Open Sans');

    // Cache Web fonts, this way our vis­i­tors will
    // ex­pe­ri­ence 'FOUT' only the first time they visit the site
    // If fontsLoaded is present in localStorage
    // Add 'font-loaded' class on the body otherwise load fonts asynchronously
    if (window.localStorage.fontsLoaded) {
      document.body.classList.add('fonts-loaded');
    } else {
      const body = document.body;
      observer
        .load()
        .then(() => {
          window.localStorage.fontsLoaded = true;
          body.classList.add('fonts-loaded');
        })
        .catch((err) => {
          window.localStorage.fontsLoaded = false;
          body.classList.remove('fonts-loaded');
          // eslint-disable-next-line no-console
          console.error(err);
        });
    }
  }
  render() {
    return (
      <span>
        <h1 style={{ textAlign: 'center' }}>TMS RenderingEngine</h1>
        <h2 style={{ textAlign: 'center' }}>Components</h2>
        <ul>
          <li key={1}>
            <h3>Card</h3>
            <Card
              title="Card title"
              subtitle="Card subtitle"
              logoChannel="https://thumb.canalplus.pro/http/unsafe/{resolutionXY}/image.canal-plus.com/media_cpa/img/channel/white/288_218/png/40052_288_218.png"
              image="https://thumb.canalplus.pro/bddpe/unsafe/%7BresolutionXY%7D/54125687"
              ratio={169}
              onClick={() => {
                console.log('onClickCard'); // eslint-disable-line no-console
              }}
              isRemovableItem
              onClickCrossButton={() => {
                console.log('onClickCrossButton'); // eslint-disable-line no-console
              }}
              actionBar={() =>
                (<span>
                  <Icons.Close svgClass={classnames(styles.icon, styles.right)} />
                  <Icons.CarouselArrow svgClass={classnames(styles.icon, styles.right)} />
                  <Icons.Check svgClass={classnames(styles.icon, styles.right)} />
                  <Icons.Allocine svgClass={classnames(styles.icon, styles.right)} />
                  <Icons.Arrow svgClass={classnames(styles.icon, styles.right)} />
                </span>)}
              dark={false}
              displaySubtitlePlaceholder={false}
              availabilityEndDate={0}
              label={{ position: 'top-left', content: 'Dernier jour' }}
            />
          </li>
          <li key={2}>
            <h3>Icons</h3>
            <Icons.Close svgClass={classnames(styles.icon, styles.right)} />
            <Icons.CarouselArrow svgClass={classnames(styles.icon, styles.right)} />
            <Icons.Check svgClass={classnames(styles.icon, styles.right)} />
            <Icons.Allocine svgClass={classnames(styles.icon, styles.right)} />
            <Icons.Arrow svgClass={classnames(styles.icon, styles.right)} />
            <Icons.Favorite svgClass={classnames(styles.icon, styles.right)} />
            <Icons.HistoryOn svgClass={classnames(styles.icon, styles.right)} />
            <Icons.Download svgClass={classnames(styles.icon, styles.right)} />
            <Icons.MoodDislike svgClass={classnames(styles.icon, styles.right)} />
            <Icons.MoodLike svgClass={classnames(styles.icon, styles.right)} />
            <Icons.MoodNeutral svgClass={classnames(styles.icon, styles.right)} />
            <Icons.Play svgClass={classnames(styles.icon, styles.right)} />
            <Icons.Playlist svgClass={classnames(styles.icon, styles.right)} />
            <Icons.Restart svgClass={classnames(styles.icon, styles.right)} />
            <Icons.Start svgClass={classnames(styles.icon, styles.right)} />
            <Icons.User svgClass={classnames(styles.icon, styles.right)} />
          </li>
          <li>
            <h3>Other stuff</h3>
            <div style={{ position: 'relative', height: '3rem' }} className={styles.top}>
              <Remove />
            </div>
            <div className={styles.top}>
              <ProgressTimer isInHistory={false} userProgress={89} />
            </div>
            <div className={styles.top}>
              <ProgressTimer className={styles.top} isInHistory={false} userProgress={87} />
            </div>
            <div className={classnames(styles.top, styles.label)}>
              <Label content="label" color="raspberry" size="small" textColor="white" />
              <br />
              <br />
              <Label content="label medium" color="raspberry" size="medium" textColor="white" />
            </div>
            <div className={styles.top}>
              <HeadingContent title="HeadingContent" />
              <HeadingContent title="HeadingContent big" big />
            </div>
            <div className={styles.top}>
              <Spinner />
            </div>
          </li>
        </ul>
        <h2 style={{ textAlign: 'center' }}>Templates</h2>
        <ul>
          <li key={1}>
            <h3>ContentRow</h3>
            <ContentRowContainer />
          </li>
          <li key={2}>
            <h3>Mosaic</h3>
            <MosaicContainer />
          </li>
          <li key={3}>
            <h3>ContentGrid</h3>
            <ContentGridContainer />
          </li>
          <li key={4}>
            <h3>Landing</h3>
            <LandingContainer />
          </li>
        </ul>
      </span>
    );
  }
}

export default RenderingEngine;
