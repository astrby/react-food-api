import React, { startTransition } from 'react'
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com'
import '../components/Contacto.css'

const Contacto = () => {

    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_4gyem64', 'template_8bc37ja', e.target, 'AO5ZwI17kAU0TdRKu')
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