import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
0% {
  transform: translate(0,0px)
}
50% {
  transform: translate(0,30px)
}
100% {
  transform: translate(0,0px)
}
`;

export const CountUpWrapper = styled.div`
font-size: 80px;
flex-direction: column;
flex-wrap: nowrap;
justify-content: flex-start;
align-items: center;
display: flex;
  span {
  margin: 10px;
  color: grey;
  animation : 3s ${rotate} infinite;
}
.${(props) => props.money} {
  font-size: 160px;
}
`;

export const Wrapper = styled.div`
display: flex;
`;
