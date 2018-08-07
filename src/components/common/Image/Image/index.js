import React, { Component } from 'react';

import { ImageWrapper } from './styles';

class Image extends Component {
  state = {
    loaded: false,
  };

  componentDidMount() {
    this._image = document.createElement('img');
    this._image.src = this.getBackgroundURL(this.image);

    this._image.onload = () =>
      this.setState(() => ({
        loaded: true,
      }));
  }

  getBackgroundURL = el => {
    let background = '';

    if (el.currentStyle) {
      background = el.currentStyle.backgroundImage;
    } else if (document.defaultView && document.defaultView.getComputedStyle) {
      background = document.defaultView.getComputedStyle(el, '')
        .backgroundImage;
    } else {
      background = el.style.backgroundImage;
    }

    return background.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
  };

  render() {
    const { loaded } = this.state;
    return (
      <ImageWrapper
        loaded={loaded}
        innerRef={ref => {
          this.image = ref;
        }}
        {...this.props}
      />
    );
  }
}

export default Image;
