import { Component, PropTypes } from 'react';

export default class FetchOnTrigger extends Component {

  state = { data: undefined, error: undefined }

  trigger = async () => {
    try {
      const response = await fetch(this.props.url);
      const json = await response.json();
      this.setState({
        data: json,
        error: undefined,
      });
    } catch (e) {
      this.setState({
        error: e.statusText,
        data: await e.text(),
      });
    }
  }

  render() {
    return this.props.children({
      trigger: this.trigger,
      data: this.state.data,
      error: this.state.error,
    });
  }
}

FetchOnTrigger.propTypes = {
  children: PropTypes.func,
  url: PropTypes.string.isRequired,
};
