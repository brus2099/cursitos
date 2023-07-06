/**
 * 22. Formularios
 * Creo que esta sesion es solo practica
 * Es posible abordar los formularios de dos formas:
 * 1. No controlados: los datos se manejan directamente desde el DOM y con referencias
 * 2. Controlados: los datos se manejan desde el estado del componente
 * amonos a la practica!!
 */

import React, { useState } from 'react';

// const Formularios = () => {
//   const [nombre, setNombre] = useState('');
//   const [sabor, setSabor] = useState('');
//   const [ejercicio, setEjercicio] = useState('');
//   const [terminos, setTerminos] = useState(false);

//   const handdleSubmit = (e) => {
//     e.preventDefault();
//     alert('el formulario se ha enviado');
//   };

//   return (
//     <>
//       <h2>Formularios</h2>
//       {/* solo los inputs más usados */}
//       <form onSubmit={handdleSubmit}>
//         {/* En React el "for" es una propiedad invalida, debe escribirse como "htmlFor" */}
//         <label htmlFor="nombre">Nombre</label>
//         <input
//           type="text"
//           id="nombre"
//           name="nombre"
//           value={nombre}
//           onChange={e => setNombre(e.target.value)}
//         />
//         {
//           /** la etiqueta value siempre va acompañada del elento onChange para controlar el cambio
//            * o puede ser sustituido por la propiedad defaultValue la cual es no controlada, y lo que provocara un nuevo error ya que asi no se manipulan estos elementos
//            * 
//            * En un componente de clase tendria que crearse un metodo para manejar el cambio y asignarlo a la propiedad onChange
//            * Gracias a los hooks, en un componente funcional se puede hacer directamente con el setNombre dentro de la funcion
//            */
//         }

//         <p>Radiobotones</p>
//         <input type="radio" id="gato" name="sabor" value="gato" onChange={e => setSabor(e.target.value)} />
//         <label htmlFor="gato">gato</label>

//         <input type="radio" id="prro" name="sabor" value="prro" onChange={e => setSabor(e.target.value)} />
//         <label htmlFor="prro">prro</label>

//         <input type="radio" id="puerko" name="sabor" value="puerko" onChange={e => setSabor(e.target.value)} defaultChecked />
//         {/** la propiedad "checked" marca el valor en la ui pero no lo actualiza en el estado
//          * la propiedad "-defaultChecked-" es la que se usa para marcar el valor por defecto, no actualiza el estado
//         */}
//         <label htmlFor="puerko">puerko</label>

//         <input type="radio" id="dragon" name="sabor" value="dragon" onChange={e => setSabor(e.target.value)} />
//         <label htmlFor="dragon">dragon</label>

//         <p>Select</p>
//         <select name="ejercicio" id=""
//           onChange={e => setEjercicio(e.target.value)}
//           defaultValue="lagartijas">
//           {/** si ponemos "selected" otra vez react va a estar chingue y chingue 
//            * debe sustituirse por "defaultValue" y se escribe en la etiqueta select con el valor que queremos que aparezca por defecto 
//           */}
//           <option value=""  >- - -</option>
//           <option value="flexiones">flexiones</option>
//           <option value="lagartijas">lagartijas</option>
//           <option value="sentadillas">sentadillas</option>
//           <option value="abdominales">abdominales</option>
//           <option value="pullups">pullups</option>
//           <option value="dominadas">dominadas</option>
//         </select>

//         <p>Checkbox</p>
//         <label htmlFor="terminos">Acepta términos y condiciones</label>
//         <input type="checkbox" id="terminos" name="terminos" 
//           onChange={e => setTerminos(e.target.checked)}
//         />

//         <input type="submit" />

//       </form>
//     </>
//   );
// };

const Formularios = () => {
  const [formulario, setFormulario] = useState({});

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  }

  const handleChecked = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.checked
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('el formulario se ha enviado');
  };

  return (
    <>
      <h2>Formularios</h2>
      {/* solo los inputs más usados */}
      <form onSubmit={handleSubmit}>
        {/* En React el "for" es una propiedad invalida, debe escribirse como "htmlFor" */}
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formulario.nombre}
          onChange={handleChange}
        />
        {
          /** la etiqueta value siempre va acompañada del elento onChange para controlar el cambio
           * o puede ser sustituido por la propiedad defaultValue la cual es no controlada, y lo que provocara un nuevo error ya que asi no se manipulan estos elementos
           * 
           * En un componente de clase tendria que crearse un metodo para manejar el cambio y asignarlo a la propiedad onChange
           * Gracias a los hooks, en un componente funcional se puede hacer directamente con el setNombre dentro de la funcion
           */
        }

        <p>Radiobotones</p>
        <input type="radio" id="gato" name="sabor" value="gato" onChange={handleChange} />
        <label htmlFor="gato">gato</label>

        <input type="radio" id="prro" name="sabor" value="prro" onChange={handleChange} />
        <label htmlFor="prro">prro</label>

        <input type="radio" id="puerko" name="sabor" value="puerko" onChange={handleChange} defaultChecked />
        {/** la propiedad "checked" marca el valor en la ui pero no lo actualiza en el estado
         * la propiedad "-defaultChecked-" es la que se usa para marcar el valor por defecto, no actualiza el estado
        */}
        <label htmlFor="puerko">puerko</label>

        <input type="radio" id="dragon" name="sabor" value="dragon" onChange={handleChange} />
        <label htmlFor="dragon">dragon</label>

        <p>Select</p>
        <select name="ejercicio" id=""
          onChange={handleChange}
          defaultValue="lagartijas">
          {/** si ponemos "selected" otra vez react va a estar chingue y chingue 
           * debe sustituirse por "defaultValue" y se escribe en la etiqueta select con el valor que queremos que aparezca por defecto 
          */}
          <option value=""  >- - -</option>
          <option value="flexiones">flexiones</option>
          <option value="lagartijas">lagartijas</option>
          <option value="sentadillas">sentadillas</option>
          <option value="abdominales">abdominales</option>
          <option value="pullups">pullups</option>
          <option value="dominadas">dominadas</option>
        </select>

        <p>Checkbox</p>
        <label htmlFor="terminos">Acepta términos y condiciones</label>
        <input type="checkbox" id="terminos" name="terminos" 
          onChange={handleChecked}
        />

        <input type="submit" />

      </form>
      {
        /**para formularios pequeños esta tecnica es util
         * 
         */
      }
    </>
  );
};

export default Formularios;