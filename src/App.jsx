import React, { Component } from 'react';
import styled from 'styled-components';

import BuggyFetch from './BuggyFetch';
import FetchOnTrigger from './FetchOnTrigger';

const Intro = styled.p`
  line-height: 25px;
  border-bottom: 1px solid #eee;
  padding: 20px;
  > code {
    line-height: 20px;
    display: inline-block;
    font-weight: bold;
    border-radius: 5px;
    padding: 0 5px;
    background: #eee;
    border-bottom: 1px solid #ddd;
  }
`;

const Button = styled.button`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  padding: 10px 20px;
  background: #8BC34A;
  border: none;
  border-radius: 10px;
`;

export default class App extends Component {

  state = {
    responses: [],
  };

  render() {
    return (
      <div>
        <BuggyFetch top left bottom right dark />
        <Intro>
          Just click to fetch your IP. Press <code>e</code> to enter <em>fake mode</em>.
          After that you can pick up any status code like <code>200</code> or <code>500</code>.
          All fetch requets will have this status code until you hit <code>esc</code>.
          <br />
          PS. You can hit <code>backspace</code> to remove last digit 💥.
        </Intro>
        <FetchOnTrigger url={'https://httpbin.org/ip'}>
          {
            ({ trigger, data, error }) => (
              <div>
                <Button onClick={trigger}>fetch ip</Button>
                <p>
                  <strong>Last request info</strong>
                </p>
                <pre>
                  data: {JSON.stringify(data)}
                  <br />
                  error: {JSON.stringify(error)}
                </pre>
              </div>
            )
          }
        </FetchOnTrigger>
      </div>
    );
  }
};
