import React, { Component, } from 'react';
import PropTypes from 'prop-types';

import { Provider, Subscribe, } from 'unstated';

class DataProvider extends Component {
  static propTypes = {
    fetch: PropTypes.bool,
    params: PropTypes.object,
    request: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
    store: PropTypes.object.isRequired,
  };

  static defaultProps = {
    fetch: false,
    params: {},
  };

  constructor(props) {
    super(props);

    this.onChange = props.store.onChange;

    this.state = {
      error: false,
      loading: false,
    };
  }

  async componentDidMount() {
    const { fetch, request, params = {}, } = this.props;

    if (fetch) {
      this.onFetch();

      const { response, error, } = await request(params);

      if (error) this.onError(error);
      else this.onResponse(response);
    }
  }

  onError(error) {
    this.setState(() => ({
      error,
      loading: false,
    }));
  }

  onResponse(response) {
    this.onChange(response);

    this.setState(() => ({
      error: false,
      loading: false,
    }));
  }

  onFetch() {
    this.setState(() => ({
      error: false,
      loading: true,
    }));
  }

  render() {
    const { error, loading, } = this.state;
    const { fetch, children, store, } = this.props;

    if (!children) return null;

    return (
      <Provider>
        {fetch ? (
          <Subscribe to={[store, ]}>
            {data => children(data.state.value, { error, loading, })}
          </Subscribe>
        ) : (
          <Subscribe to={[store, ]}>
            {data => children(data.state.value, { error, loading, })}
          </Subscribe>
        )}
      </Provider>
    );
  }
}

export default DataProvider;
