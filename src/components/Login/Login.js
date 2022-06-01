
import { useState } from 'react' 
import './Login.css'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import axios from 'axios';

//Propiedades (Props)
//Ciclo de vida 
//JSX
//Estados(States)

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log("SE ENVIO EL FORMULARIO con los datos:", email, password)
        axios.post('http://challenge-react.alkemy.org', {
            email: email,
            password: password
        })
    }
    const handleChange = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    return(
        <ValidatorForm 
            className="login-form"
            onSubmit={handleSubmit}
        >
                <h2>Iniciar sesión</h2>
                <p>¿Tienes una cuenta de HBO Max?</p>
                <TextValidator 
                    InputLabelProps={{
                        shrink: true,
                    }} 
                    id="mail"
                    onChange={handleChange}
                    label="E-mail" 
                    variant="standard" 
                    className='input-login'
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={['El campo es obligatorio', 'Ingrésala usando el siguiente formato: nombre@ejemplo.com']}
                />
                <TextValidator 
                    InputLabelProps={{
                        shrink: true,
                    }} 
                    id="contrasena"
                    type="password"
                    onChange={handleChangePassword}
                    label="Contraseña" 
                    value={password}
                    variant='standard' 
                    className='input-login'
                    validators={['required']}
                    errorMessages={['Debe ingresar una contraseña']}
                />
                <button type="submit" className='iniciar-sesion' disabled={email === '' || password === '' ? true : false}>INICIAR SESION</button>
                <p className='pregunta'>¿Olvidaste tu contraseña?</p>
                <div className='separator-line'>
                    <div className="linea"></div>
                    <p> o </p>
                    <div className="linea"></div>
                </div>
                <p>¿Tienes HBO Max a través de un proveedor de TV, Internet o telefonía móvil?</p> 
                <button className='proveedor'>INGRESAR CON UN PROVEEDOR</button>
                <p className='pregunta'>¿Necesitas ayuda?</p>
        </ValidatorForm>
    )
}

export default Login
