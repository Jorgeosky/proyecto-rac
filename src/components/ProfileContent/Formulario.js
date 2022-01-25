import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Formulario() {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (
		<>
			<Formik
				initialValues={{
					nombre: '',
					snombre: '',
					ntelefono: '',
					ciudad: '',
					correo: '',
					password1: '',
					password2: ''


				}}
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if (!valores.nombre) {
						errores.nombre = 'Por favor ingresa tu nombre'
					} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}

					// Validacion Segundo nombre
					if (!valores.snombre) {
						errores.snombre = 'Por favor ingresa tu Segundo nombre'
					} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.snombre)) {
						errores.snombre = 'El nombre solo puede contener letras y espacios'
					}

					// Validacion Numero telefonico
					if (!valores.ntelefono) {
						errores.ntelefono = 'Por favor ingresa tu número de Celular'
					} else if (!/^[+]57\d{10}$/.test(valores.ntelefono)) {
						errores.ntelefono = 'El telefono solo puede contener números'
					}

					// Validacion Ciudad
					if (!valores.ciudad) {
						errores.ciudad = 'Por favor ingresa la ciudad'
					} else if (!/^[a-zA-ZÀ-ÿ\s]{1,10}$/.test(valores.ciudad)) {
						errores.ciudad = 'La ciudad solo puede contener letras y espacios'
					}

					// Validacion correo
					if (!valores.correo) {
						errores.correo = 'Por favor ingresa un correo electronico'
					} else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
						errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

					if (!valores.password1) {
						errores.password1 = 'Por favor ingresa una contraseña'
					}

					if (!valores.password2) {
						errores.password2 = 'Por favor confirma la contraseña'
					}

					if (valores.password1 !== valores.password2) {
						errores.password2 = 'la contraseña no coincide'
					}

					return errores;
				}}
				onSubmit={(valores, { resetForm }) => {
					resetForm();
					console.log('Formulario enviado');
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
				}}
			>
				{({ errors }) => (
					<Form className="formulario">
						<div class="row">
							<div class="col">
								<Field
									type="text"
									id="nombre"
									name="nombre"
									placeholder="First Name"
								/>
								<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
							</div>
							<div class="col">
								<Field
									type="text"
									id="snombre"
									name="snombre"
									placeholder="Last Name"
								/>
								<ErrorMessage name="snombre" component={() => (<div className="error">{errors.snombre}</div>)} />
							</div>

						</div>

						<div class="row">
							<div class="col">
								<Field
									type="text"
									id="ntelefono"
									name="ntelefono"
									placeholder="phone"
								/>
								<ErrorMessage name="nombre" component={() => (<div className="error">{errors.ntelefono}</div>)} />
							</div>
							<div class="col">
								<Field
									type="text"
									id="ciudad"
									name="ciudad"
									placeholder="City"
								/>
								<ErrorMessage name="nombre" component={() => (<div className="error">{errors.ciudad}</div>)} />
							</div>

						</div>

						<div>
							<Field
								type="text"
								id="correo"
								name="correo"
								placeholder="email"
							/>
							<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
						</div>

						<div>
							<Field
								type="password"
								id="password1"
								name="password1"
								placeholder="password"
							/>
							<ErrorMessage name="password1" component={() => (<div className="error">{errors.password1}</div>)} />
						</div>
						<div>
							<Field
								type="password"
								id="password2"
								name="password2"
								placeholder="confirm password"
							/>
							<ErrorMessage name="password2" component={() => (<div className="error">{errors.password2}</div>)} />
						</div>



						<button type="submit">Enviar</button>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}



			</Formik>
		</>
	);
}
