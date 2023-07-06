import React from "react";
import styled from "styled-components";

const StyledComponents = () => { 
  // esto no es un string normal en js
  // es un tagged template literal
  // ya es codigo css

  // los nombres de las variables deben empezar con mayuscula!!
  const MyStyledP = styled.p` 
    background-color: aliceblue;
    width: 200px;
    margin: 0 auto;
    padding: 20px;
    border: 3px solid #999;
    font-size: 1.1em;
  `;

  return (
    <div>
      <h2>Styled Components</h2>
      <MyStyledP>Texto con styled components</MyStyledP>
    </div>
  );
};

export default StyledComponents;