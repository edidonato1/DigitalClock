import styled from 'styled-components';

const LayoutStyles = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #313131;
  height: 100vh;
`
const Footer = styled.footer`
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #202020;
  border-top: 3px solid #35a3a3;
  width: 100vw;
  height: 80px;

  #github-link {
    font-size: 25px;
    font-family: 'Space Mono', courier;
    text-decoration: none;
    color: #DB686F;
    margin-right: 10vw;
  }
`

export {LayoutStyles, Footer}
