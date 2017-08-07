import React, { Component } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import ContentGridTemplate from 'RenderingEngineSrc/components/ContentGrid/ContentGridTemplate';
import { setContentId } from 'RenderingEngineSrc/helpers/contents';
/* eslint-enable import/no-extraneous-dependencies */
/* eslint-enable import/no-unresolved */
/* eslint-enable import/extensions */
import config from '../config';

class ContentGridContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
    };
  }
  componentDidMount() {
    // Fetch content
    fetch(config('rest.contentGrid')).then(response => response.json()).then((json) => {
      setContentId(json.contents);
      this.setState({
        contents: json.contents,
      });
    });
  }

  render() {
    return <ContentGridTemplate ratio={169} contents={this.state.contents} />;
  }
}

export default ContentGridContainer;
