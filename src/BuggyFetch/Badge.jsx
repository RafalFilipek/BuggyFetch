import styled from 'styled-components';

import colors from './colors';

export default styled.span`
  display: inline-block;
  padding: 3px;
  background-color: ${props => ({
    1: colors.inactive,
    2: colors.warn,
    3: colors.ok,
  }[props.status])};
  width: 10px;
  height: 10px;
  border-radius: 10px;
  vertical-align: middle;
`;
