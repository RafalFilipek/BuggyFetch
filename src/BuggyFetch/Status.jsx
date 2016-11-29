import React, { PropTypes } from 'react';
import styled from 'styled-components';
import padEnd from 'lodash/padEnd';
import isNaN from 'lodash/isNaN';

import colors from './colors';

const getStatusColor = (code) => {
  if (code < 100) {
    return 'inherit';
  }
  if (code < 300) {
    return colors.ok;
  }
  if (code < 400) {
    return colors.inactive;
  }
  return colors.error;
};


const Status = ({ code, className }) => (
  isNaN(code) ? <span /> : <span>status: <code className={className}>{padEnd(code, 3, '_')}</code></span>
);
Status.propTypes = {
  code: PropTypes.number,
  className: PropTypes.string,
};

export default styled(Status)`
  letter-spacing: 2px;
  color: ${props => getStatusColor(props.code, 10)};
`;
