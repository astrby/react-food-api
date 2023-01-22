import React, { startTransition } from 'react'
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com'
import '../components/Contacto.css'

const Contacto = () => {

    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, e.target, process.env.REACT_APP_EMAILJSKEY)
    }
    
    return (
    <>
        <Form className='sendForm' onSubmit={sendEmail}>
            <h3 className='contactTitle'>Formulario de Contacto</h3>
            <p className='tag'>Nombre</p>
            <input className='input' type='text' name='nombre'></input>
            <p className='tag'>Email</p>
            <input className='input' type='text' name='email'></input>
            <p className='tag'>Teléfono</p>
            <input className='input' type='text' name='telefono'></input>
            <p className='tag'>Mensaje</p>
            <textarea className='inputMensaje' type='text' name='mensaje'></textarea>
            <br/>
            <button className='sendButton'>Enviar</button>
        </Form>
    </>
  )
}

export default Contacto