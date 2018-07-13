import React, { Component, } from 'react';
import PropTypes from 'prop-types';

class DataProvider extends Component {
  static propTypes = {
    fetch: PropTypes.bool,
    params: PropTypes.object,
    request: PropTypes.func.isRequired,
    entity: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
    context: PropTypes.object.isRequired,
  };

  static defaultProps = {
    fetch: false,
    params: {},
  };

  constructor(props) {
    super(props);

    this.state = {
      error: false,
      loading: false,
      value: props.entity(),
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
    this.setState(() => ({
      error: false,
      loading: false,
      value: response,
    }));
  }

  onFetch() {
    this.setState(() => ({
      error: false,
      loading: true,
    }));
  }

  render() {
    const { value, error, loading, } = this.state;
    const { fetch, children, context: Context, } = this.props;

    if (!children) return null;

    if (fetch) {
      return (
        <Context.Provider value={value}>
          <Context.Consumer>
            {data => children(data, { error, loading, })}
          </Context.Consumer>
        </Context.Provider>
      );
    }

    return (
      <Context.Consumer>
        {data => children(data, { error, loading, })}
      </Context.Consumer>
    );
  }
}

export default DataProvider;
