import styled from 'styled-components';

export const ClockContainer = styled.div`
  background: #212121;
  border-radius: 30px;
  box-shadow: inset 0px 0px 10px ${({ clockColor }) => clockColor};
  padding: 40px;
  margin-bottom: 80px;
  width: fit-content;
  height: fit-content;

  transition: .8s;
  * {
    transition: .8s;
  }
  
  #clock-skew {
    transform: skewX(-7deg);
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
  }
  .analog-digit-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 4px;
    width: fit-content;
    height: fit-content;
  }

  .colon-container { 
    margin: 0 5px; 
  }

  .row {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  .block {
    border-radius: 2px;
    box-shadow: 0px 0px  2px lightgray;
    margin: 2px;
    width: 20px;
    height: 20px;
  }

  .on {
    background: ${({ clockColor }) => clockColor};
  }

  .off {
    box-shadow: inset 1px 1px 1px #090909;
    background: #191919;
  }

  #am-pm-container {
    transform: skew(7deg); // reverse skew 
    text-align: right;
    font-size: 20px;
    font-family: 'Space Mono', courier;
    letter-spacing: 2px;
    color: #131313;
    text-shadow: inset 1px 1px black;
    margin-left: 10px;
    width: 31px;
  }

  .light-up {
    color: ${({ clockColor }) => clockColor};
    text-shadow: 0px 0px  1px lightgray;
  }

  
`


export const SelectStyles = styled.div`
display: flex;
margin: 15px 0 -10px 0;
margin-left: ${({ showColors }) => showColors ? "0px" : "10px"};
justify-content: center;

.color-picker  {
  font-size: 22px;
  border-radius: 10px;
  margin: ${({showColors}) => showColors ? "0 5px" : "0 -11px"};
}


`
