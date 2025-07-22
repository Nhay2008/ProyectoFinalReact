import React from 'react';
import Contact from '../components/Contact';
import { Helmet } from 'react-helmet';

function Contacto() {
  return (
    <>
      <Helmet>
        <title>Contacto | TuTiendaXpress</title>
        <meta name="description" content="Envíanos tu mensaje o consulta a través de nuestro formulario de contacto." />
      </Helmet>
      <Contact />
    </>
  );
}

export default Contacto;