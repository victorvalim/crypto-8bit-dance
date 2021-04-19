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
font-size: 3vw;
flex-direction: column;
flex-wrap: nowrap;
justify-content: flex-start;
align-items: center;
display: flex;
  span {
    font-family: "Poppins", sans-serif;
    display:inline-block;
  color: grey;
  animation : 3s ${rotate} infinite;
}
.${(props) => props.money} {
  color:black;
  font-size: 12vw;
}
h4 {
  font-family: "Poppins", sans-serif;
  font-size:1vw;
  margin-botton: 2px;
  opacity: 0.3;
  color:grey;
}
`;

export const Wrapper = styled.div`
display: flex;
`;
