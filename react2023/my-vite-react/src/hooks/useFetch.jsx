import { useState, useEffect } from "react";

// este hook solo va a ejecutar peticiones get
// por ahora no necesita el objeto de parametros para realizar otras peticiones http como en el caso de post, put o delete
const useFetch = url => {
  //controla la informacion que va a regresar el hook
  const [data, setData] = useState(null);
  // controla cuando ya se recibio la peticion
  const [isPending, setIsPending] = useState(true);
  // controla cuando hay un error
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {

      // al tratar con async await, se debe usar try catch
      try {
        let res = await fetch(url);
        //un error al hacer la peticion es diferente a un error en la respuesta
        if (!res.ok) {
          // throw es como el return de los errores, y tambien detiene la ejecucion
          // formato comun de los errores
          throw {
            err: true,
            status: res.status,
            // statusText a veces viene vacio, por eso se usa el operador ternario
            statusText: !res.statusText ? "Ocurrio un error" : res.statusText
          };
        }

        let jsonData = await res.json();
        setIsPending(false);
        setData(jsonData);
        setError({ err: false });
      } catch (err) {
        setIsPending(true);
        setError(err);
        // el estado de data no se toca porque podriamos estar reseteando a null los datos que ya se obtuvieron en un uso previo de useFetch
      }
    }

    getData(url);
  }, [url]);

  return { data, isPending, error };
}

// no se exporta por defecto porque se pueden exportar varios hooks
export { useFetch };