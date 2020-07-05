import styled, { createGlobalStyle, css } from "styled-components";

// eslint-disable-next-line @typescript-eslint/class-name-casing
interface iInput {
  filled: boolean;
  focused: boolean;
}

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;

    font-family: Arial, sans-serif;
  }

  body {
    background: #404240;
  }
`;

export const Container = styled.div`
  max-width: 1120px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;

  h1 {
    color: #e3e3e3;
  }
`;

export const Input = styled.input<iInput>`
  position: absolute;
  width: 100%;
  height: 50px;
  top: 50%;
  border-radius: 12px;
  padding: 15px;
  font-size: 22px;
  border: 0;
  background: #e3e3e3;
  margin-bottom: 50px;
  transition: top 0.3s;

  ${(props) =>
    (props.filled || props.focused) &&
    css`
      top: 10%;
    `}
`;

export const GifsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  justify-content: center;
  padding-top: 70px;

  span {
    color: #fff;
    font-size: 22px;
  }

  img {
    height: 100px;
    object-fit: cover;
    margin: 10px;
  }
`;
