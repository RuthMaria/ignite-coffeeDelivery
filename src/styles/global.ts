import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  border: 0;
  autline: 0;
  box-sizing: border-box;
}

body {
  background: ${(props) => props.theme['background']};
  color: ${(props) => props.theme['base-text']};
  -webkit-font-smoothing: antialiased; // deixa as fontes mais fininhas e bonitas, padroniza entre os navegadores.
  -webkit-appearance: none;
}

body,
input,
textarea,
button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}
`;
