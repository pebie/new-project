import React, { Component } from 'react';
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import ContentRowTemplate from 'RenderingEngineSrc/components/ContentRow/ContentRowTemplate';
import { setContentId } from 'RenderingEngineSrc/helpers/contents';
/* eslint-enable import/no-extraneous-dependencies */
/* eslint-enable import/no-unresolved */
/* eslint-enable import/extensions */
import styles from '../index.scss';
import config from '../config';

class ContentRowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
      ratio: 169,
    };
  }
  componentDidMount() {
    // Fetch content
    fetch(config('rest.contentRow')).then(response => response.json()).then((json) => {
      setContentId(json.contents);
      this.setState({
        contents: json.contents,
      });
    });
  }

  changeRatio(e) {
    this.setState({
      ratio: parseInt(e.currentTarget.value, 10),
    });
  }

  render() {
    return (
      <div>
        <form name="changeRatio">
          <span className={styles.list_title}>Choose ratio</span>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <label htmlFor="166">166</label>
              <input
                id="166"
                onChange={e => this.changeRatio(e)}
                type="radio"
                value={166}
                checked={this.state.ratio === 166}
              />
            </li>
            <li className={styles.list_item}>
              <label htmlFor="169">169</label>
              <input
                id="169"
                onChange={e => this.changeRatio(e)}
                type="radio"
                value={169}
                checked={this.state.ratio === 169}
              />
            </li>
            <li className={styles.list_item}>
              <label htmlFor="34">34</label>
              <input
                id="34"
                onChange={e => this.changeRatio(e)}
                type="radio"
                value={34}
                checked={this.state.ratio === 34}
              />
            </li>
          </ul>
        </form>
        <ContentRowTemplate ratio={this.state.ratio} contents={this.state.contents} />
      </div>
    );
  }
}

export default ContentRowContainer;
