import React from 'react'

const Contacto = () => {
    
  return (
    <div>

     <h1>Contacto</h1>

     <form>

       <label htmlFor='nombre'>Nombre:</label>
       <input type="text" id='nombre' name='nombre'></input>

       <label htmlFor='email'>Email:</label>
       <input type="email" id='email' name='email'></input>

       <label htmlFor='asunto'>Asunto:</label>
       <textarea id="asunto" name="asunto"></textarea>

       <button type='submit'>Enviar</button>
       
     </form>
      
    </div>
  )
}
       
export default Contacto
