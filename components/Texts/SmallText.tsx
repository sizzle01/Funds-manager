import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';

import {colors} from '../colors';

const styledText= styled.Text`
font-size: 13px;
color: ${colors.gray};
text-aligh: left;
`
const SmallText:FunctionComponent  = () => {
  return (
    <div>SmallText</div>
  )
}

export default SmallText