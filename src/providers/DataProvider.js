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
      response: undefined,
    };
  }

  async componentDidMount() {
    const { fetch, params = {}, } = this.props;

    if (fetch) {
      this.request(params);
    }
  }

  onError(error) {
    this.setState(() => ({
      error,
      loading: false,
      response: undefined,
    }));
  }

  onResponse(response) {
    this.setState(
      () => ({
        error: false,
        loading: false,
        response,
      }),
      () => this.onComplete(response)
    );
  }

  onRequest() {
    this.setState(() => ({
      error: false,
      loading: true,
      response: undefined,
    }));
  }

  request = async (data) => {
    const { request, } = this.props;

    this.onRequest();

    const { response, error, } = await request(data);

    if (error) this.onError(error);
    else this.onResponse(response);
  };

  render() {
    const { error, loading, response, } = this.state;
    const { children, } = this.props;

    if (!children) return null;

    return children({
      error, loading, response, request: this.request,
    });
  }
}

export default DataProvider;
