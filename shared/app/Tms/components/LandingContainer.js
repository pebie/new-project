import React, { Component } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import LandingTemplate from 'RenderingEngineSrc/components/Landing/LandingTemplate';
import { setContentId } from 'RenderingEngineSrc/helpers/contents';
import { setStratesId } from 'RenderingEngineSrc/helpers/strate';
/* eslint-enable import/no-extraneous-dependencies */
/* eslint-enable import/no-unresolved */
/* eslint-enable import/extensions */
import config from '../config';

class LandingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strates: [],
      cover: {},
    };
  }
  componentDidMount() {
    // Fetch content
    fetch(config('rest.landing')).then(response => response.json()).then((json) => {
      setStratesId(json.strates);
      json.strates.forEach(strate => setContentId(strate.contents));
      this.setState({
        strates: json.strates,
        cover: {
          image: json.covers[0].contents[0].URLImage,
          onClick: json.covers[0].contents[0].onClick,
        },
      });
    });
  }

  render() {
    return (
      <div>
        <h4>{this.state.cover && 'With cover'}</h4>
        <LandingTemplate
          cover={this.state.cover}
          strates={this.state.strates}
          isMobile={false}
          isReady
          onClickCrossButton={() => {}}
        />
      </div>
    );
  }
}

export default LandingContainer;
