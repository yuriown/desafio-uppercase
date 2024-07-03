import React from 'react';
import ColorfulUppercaseText from './compenents/colorful-uppercase-text/colorfulUppercaseText';
import Button from './compenents/button/button'

function App() {
  return (
    <>
        <h1>Quest React</h1>
        
        <h2>Texto upperCase Colorido:</h2>
        <ColorfulUppercaseText text="olá mundo!" />

        <h2>Button com Alerta:</h2>
        <Button label="Baixar CV" />
        <Button label="Enviar" />
    </>
  );
}

export default App;
