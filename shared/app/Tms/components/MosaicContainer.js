import React, { Component } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import MosaicTemplate from 'RenderingEngineSrc/components/Mosaic/MosaicTemplate';
import { setContentId } from 'RenderingEngineSrc/helpers/contents';
/* eslint-enable import/no-extraneous-dependencies */
/* eslint-enable import/no-unresolved */
/* eslint-enable import/extensions */
import config from '../config';

class MosaicContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
    };
  }
  componentDidMount() {
    // Fetch content
    fetch(config('rest.mosaic')).then(response => response.json()).then((json) => {
      setContentId(json.contents);
      this.setState({
        contents: json.contents,
      });
    });
  }

  render() {
    return <MosaicTemplate contents={this.state.contents} />;
  }
}

export default MosaicContainer;
