import styled from 'styled-components';

import BuggyFetch from './BuggyFetch';
import position from './position';
import colors from './colors';

export default styled(BuggyFetch)`
  ${props => position(props)}
  background-color: ${props => (props.dark ? '#263238' : '#EEEEEE')};
  border-top: 3px solid ${colors.ok};
  border-bottom: 3px solid ${colors.error};
  color: ${props => (props.dark ? '#fafafa' : '#333333')}
  font-size: 14px;
  line-height: 14px;
  padding: 10px;
`;

