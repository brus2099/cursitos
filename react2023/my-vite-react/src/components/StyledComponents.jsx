import React from "react";
import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from "styled-components";

const StyledComponents = () => {
  // esto no es un string normal en js
  // es un tagged template literal
  // ya es codigo css

  // esta forma de declarar es interesante
  const bgColorPink = "#db7093",
    bgAlphaColorPink = "#db709350",
    color = "#fff";

  const bgColorBlue = "#4386c9",
    bgAlphaColorBlue = "#4386c950";

  const setTrasitionTime = time => `${time}s all;`;

  // tambien se pueden declarar keyframes 
  const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `;

  // los nombres de las variables deben empezar con mayuscula!!
  const MyStyledP = styled.p` 
    color: ${({ color }) => color || "#fff"};
    /* incluso mezcla sintaxis jsx y acepta props destructuradas */
    background-color: ${({ bg_color }) => bg_color};
    width: 200px;
    margin: 0 auto;
    padding: 10px 20px;
    font-size: 1.1em;
    transition: ${setTrasitionTime("0.1")};
    // animation: ${fadeIn} 1s ease-in-out;

    /* esta sintaxis es como llamar styled components dentro de styled components */
    ${({ isButton }) => isButton && css`
      cursor: pointer;
      border: 2px solid #ccc;
      color: #666;
      text-align: center;

      &:hover {
        background-color: #ccc;
      }
      /* alam!! */
    `}

    // permite nesting como sass
    &:hover {
      background-color: ${props => props["bg-color-hover"]};
      color: #fff;
    }
  `;

  const darkTheme = {
    main: "#ffffff",
    secondary: "#555",
    bg: "#202020"
  }

  const lightTheme = {
    main: "#232323",
    secondary: "#ccc",
    bg: "#fff"
  }

  const Box = styled.div`
    font-family: 'Cascadia Code', monospace;
    font-size: 2em;
    font-weight: 700;
    padding: 30px 70px;
    width: fit-content;
    margin: 10px auto;

    // accedo a los estilos del theme provider
    color: ${({ theme }) => theme.main || "#bf5175"};
    background-color: ${({ theme }) => theme.bg || "#ffefd5"};
  `;

  // hereda los estilos de Box
  // en React esto se llama higher order component
  const BoxRounded = styled(Box)`
    border-radius: 10px;  
  `;

  // esta funcionalidad de styled components es para asignar estilos a todos los elementos del componente
  // es como un reset de css
  // lo ideal es colocalo en el index.js, en la raiz de todo el proyecto
  const GlobalStyle = createGlobalStyle`
    body {
      background-color: #fafafa;
    }
  `;

  return (
    <div>
      {
        // el GlobalStyle se puede colocar en cualquier parte del proyecto y afecta a absolutamente todos los componentes, incluso a los que estan fuera de este componente
      }
      <GlobalStyle />
      <h2>Styled Components</h2>
      <MyStyledP color={bgColorPink} bg_color={bgAlphaColorPink} bg-color-hover={bgColorPink}>Menu</MyStyledP>
      <MyStyledP color={bgColorBlue} bg_color={bgAlphaColorBlue} bg-color-hover={bgColorBlue}>About</MyStyledP>
      <MyStyledP isButton>Save</MyStyledP>
      <Box>Welcome</Box>
      {
        // el theme provider tiene una propiedad llamada theme que puede ser un objeto  con los estilos que queremos
        // puedo ver que la diferencia con pasar una propiedad normal es que tendriamos que pasar una propiedad por estilo aplicado
        // en cambio con el theme provider podemos pasar un objeto con todos los estilos que queremos, y estos solo se llaman con una funcion desde el styled component, accedidos de la misma forma que accedemos a las props pero con un nivel de profundidad mas
      }
      <ThemeProvider theme={lightTheme}>
        <Box>Light Theme</Box>
      </ThemeProvider>
      <ThemeProvider theme={darkTheme}>
        <Box>Dark Theme</Box>
        {/*se le aplican los estilos de Box
          luego los del theme provider
          y luego los de BoxRounded
          estos tienen una sintaxis de styled donde heredan un styled component y le aplican estilos nuevos, respetando que este box está dentro de un theme provider
        */}
        <BoxRounded>Rounded Box</BoxRounded>
      </ThemeProvider>
    </div>
  );
};

export default StyledComponents;