import { Container } from 'unstated';

class DataStore extends Container {
  constructor(props) {
    super(props);

    const { initial } = props;

    this.state = {
      value: initial,
    };
  }

  onChange = value => this.setState({ value });
}

export default DataStore;
