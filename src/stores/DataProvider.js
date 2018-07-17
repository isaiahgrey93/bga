import { Component, } from 'react';
import PropTypes from 'prop-types';

class DataProvider extends Component {
  static propTypes = {
    fetch: PropTypes.bool,
    params: PropTypes.object,
    request: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired,
  };

  static defaultProps = {
    fetch: false,
    params: {},
  };

  constructor(props) {
    super(props);

    this.onComplete = props.onComplete;

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
    this.setState(
      () => ({
        error: false,
        loading: false,
      }),
      () => this.onComplete(response)
    );
  }

  onFetch() {
    this.setState(() => ({
      error: false,
      loading: true,
    }));
  }

  render() {
    const { error, loading, } = this.state;
    const { fetch, children, } = this.props;

    if (!children) return null;

    if (!fetch) return children({});

    return children({ error, loading, });
  }
}

export default DataProvider;
