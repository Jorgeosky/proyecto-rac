import React, { useCallback, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

export default function Formulario() {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const ErrorComponent = (value) =>
    useCallback(() => <div className="error">{value}</div>, [value]);

  return (
    <div className="editProfileForm">
      <Formik
        initialValues={{
          nombre: '',
          snombre: '',
          ntelefono: '',
          ciudad: '',
          correo: '',
          password1: '',
          password2: '',
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log('Formulario enviado');
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 5000);
        }}
        validate={(valores) => {
          const errores = {};

          // Validacion nombre
          if (!valores.nombre) {
            errores.nombre = 'Por favor ingresa tu nombre';
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = 'El nombre solo puede contener letras y espacios';
          }

          // Validacion Segundo nombre
          if (!valores.snombre) {
            errores.snombre = 'Por favor ingresa tu Segundo nombre';
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.snombre)) {
            errores.snombre = 'El nombre solo puede contener letras y espacios';
          }

          // Validacion Numero telefonico
          if (!valores.ntelefono) {
            errores.ntelefono = 'Por favor ingresa tu número de Celular';
          } else if (!/^[+]57\d{10}$/.test(valores.ntelefono)) {
            errores.ntelefono = 'El telefono solo puede contener números';
          }

          // Validacion Ciudad
          if (!valores.ciudad) {
            errores.ciudad = 'Por favor ingresa la ciudad';
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,10}$/.test(valores.ciudad)) {
            errores.ciudad = 'La ciudad solo puede contener letras y espacios';
          }

          // Validacion correo
          if (!valores.correo) {
            errores.correo = 'Por favor ingresa un correo electronico';
          } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
            errores.correo =
              'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.';
          }

          if (!valores.password1) {
            errores.password1 = 'Por favor ingresa una contraseña';
          }

          if (!valores.password2) {
            errores.password2 = 'Por favor confirma la contraseña';
          }

          if (valores.password1 !== valores.password2) {
            errores.password2 = 'la contraseña no coincide';
          }

          return errores;
        }}>
        {({ errors }) => (
          <Form className="formulario">
            <div className="doubleInput">
              <Field id="nombre" name="nombre" placeholder="First Name" type="text" />
              <ErrorMessage component={() => ErrorComponent(errors.nombre)} name="nombre" />
              <Field id="snombre" name="snombre" placeholder="Last Name" type="text" />
              <ErrorMessage component={() => ErrorComponent(errors.snombre)} name="snombre" />
            </div>

            <div className="doubleInput">
              <Field id="ntelefono" name="ntelefono" placeholder="Phone" type="text" />
              <ErrorMessage component={() => ErrorComponent(errors.ntelefono)} name="nombre" />
              <Field id="ciudad" name="ciudad" placeholder="City" type="text" />
              <ErrorMessage component={() => ErrorComponent(errors.ciudad)} name="nombre" />
            </div>

            <div>
              <Field id="correo" name="correo" placeholder="Email" type="text" />
              <ErrorMessage component={() => ErrorComponent(errors.correo)} name="correo" />
            </div>

            <div>
              <Field id="password1" name="password1" placeholder="Password" type="password" />
              <ErrorMessage component={() => ErrorComponent(errors.password1)} name="password1" />
            </div>
            <div>
              <Field
                id="password2"
                name="password2"
                placeholder="Confirm password"
                type="password"
              />
              <ErrorMessage component={() => ErrorComponent(errors.password2)} name="password2" />
            </div>

            <button type="submit">Enviar</button>
            {formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
}
