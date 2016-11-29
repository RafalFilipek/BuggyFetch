import React, { Component, PropTypes } from 'react';

import Badge from './Badge';
import Status from './Status';
import statuses from './statuses';

export default class BuggyFetch extends Component {

  static propTypes = {
    className: PropTypes.string,
  }

  state = {
    combinationStarted: false,
    numbers: [],
  }

  componentDidMount() {
    this.nativeFetch = global.fetch;
    global.fetch = this.fetch;
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    global.fetch = this.nativeFetch;
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  getStatus() {
    const started = this.state.combinationStarted;
    const hasStatus = this.state.numbers.length === 3;
    if (started && hasStatus) {
      return statuses.ACTIVE;
    }
    if (started && !hasStatus) {
      return statuses.INCOMPLETE;
    }
    return statuses.INACTIVE;
  }

  fetch = (...params) => {
    if (!this.state.combinationStarted || this.state.numbers.length !== 3) {
      return this.nativeFetch.apply(global, params);
    }
    const status = this.state.numbers.join('');
    return Promise.reject(new Response(new Blob([JSON.stringify({ text: `Buggy Fetch: ${status}` })]), {
      status: 500,
      statusText: status,
    }));
  }

  handleKeyUp = (e) => {
    let code = e.which;
    if (this.state.combinationStarted) {
      // 0 - 9
      if (code >= 48 && code <= 57 && this.state.numbers.length < 3) {
        this.setState({
          numbers: this.state.numbers.concat(String.fromCharCode(code)),
        });
      }
      if (code === 8) {
        if (this.state.numbers.length === 0) {
          code = 27; // convert to escape case
        } else {
          this.setState({
            numbers: this.state.numbers.slice(0, this.state.numbers.length - 1),
          });
        }
      }
    }
    // e or esc
    if (code === 69 || code === 27) {
      this.setState({
        combinationStarted: code === 69,
        numbers: [],
      });
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        <Badge status={this.getStatus()} />
        {' '}
        <Status code={parseInt(this.state.numbers.join(''), 10)} />
      </div>
    );
  }

}
