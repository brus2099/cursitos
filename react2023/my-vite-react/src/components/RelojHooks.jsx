import React, { useState, useEffect } from 'react';

function Reloj({ hora }) {
  return <h3>{hora}</h3>
}

function RelojHooks(props) {

  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);
  let temporizador = null;

  useEffect(() => {
    let temporizador;

    if (visible) {
      temporizador = setInterval(() => {
        // useEffect no tiene sentido si no hay un estado que cambi
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);
    }

    // esta mamada no desmonta nada >:( 
    return () => {
      console.log('Fase de desmontaje');
      clearInterval(temporizador);
    }
  }, [visible]);


  return (
    <>
      <h2>Reloj con hooks</h2>
      {visible && <Reloj hora={hora} />}
      <button onClick={() => setVisible(true)}>iniciar</button>
      <button onClick={() => setVisible(false)}>detener</button>
    </>
  );
}

export default RelojHooks;