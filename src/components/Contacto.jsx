import React, { startTransition, useState } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import emailjs from "emailjs-com";
import "../components/Contacto.css";

const Contacto = () => {
  const [alert, setAlert] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("mensaje").value;

    if (!nombre || !email || !telefono || !mensaje) {
      setAlert("error");
      setTimeout(() => {
        setAlert("");
      }, 2000);
    } else {
      setAlert("enviado");
      setTimeout(() => {
        setAlert("");
        emailjs.sendForm(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        e.target,
        process.env.REACT_APP_EMAILJSKEY
      );
      }, 2000);
      
    }
  };

  return (
    <>
      {alert === "error" ? (
        <Alert className="mx-auto mt-4 pb-1" variant="danger" style={{position: 'absolute', left:'0', right:'0', width: '40%'}}>
            <p >Error. Debe llenar todos los campos</p>
        </Alert>
      ) : alert === "enviado" ? (
        <Alert className='mx-auto mt-4 pb-1' variant="success" style={{position: 'absolute', left: '0', right:'0', width: '40%'}}>
            <p>Mensaje enviado</p>
        </Alert>
      ) : (
        ""
      )}
      <Form
        className="container text-center"
        onSubmit={sendEmail}
        style={{ paddingTop: "8rem" }}
      >
        <h3 className="contactTitle">Formulario de Contacto</h3>
        <p className="tag">Nombre</p>
        <input className="input" type="text" name="nombre" id="nombre"></input>
        <p className="tag">Email</p>
        <input className="input" type="text" name="email" id="email"></input>
        <p className="tag">Teléfono</p>
        <input
          className="input"
          type="text"
          name="telefono"
          id="telefono"
        ></input>
        <p className="tag">Mensaje</p>
        <textarea
          className="inputMensaje"
          type="text"
          name="mensaje"
          id="mensaje"
        ></textarea>
        <br />
        <button className="sendButton">Enviar</button>
      </Form>
    </>
  );
};

export default Contacto;
