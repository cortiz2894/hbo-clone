
import TextField from '@mui/material/TextField'
import './Login.css'

const Login = () => {

    return(
        <div className="login-form">
            <h2>Iniciar sesión</h2>
            <p>¿Tienes una cuenta de HBO Max?</p>
            <TextField 
                InputLabelProps={{
                    shrink: true,
                }} 
                id="mail" 
                label="E-mail" 
                variant="standard" 
                className='input-login'
            />
            <TextField 
                InputLabelProps={{
                    shrink: true,
                }} 
                id="contrasena" 
                label="Contraseña" 
                variant='standard' 
                className='input-login'
            />
            <button className='iniciar-sesion'>INICIAR SESION</button>
            <p className='pregunta'>¿Olvidaste tu contraseña?</p>
            <div className="linea"></div>
            <p> o </p>
            <div className="linea"></div>
            <p>¿Tienes HBO Max a través de un proveedor de TV, Internet o telefonía móvil?</p> 
            <button className='proveedor'>INGRESAR CON UN PROVEEDOR</button>
            <p className='pregunta'>¿Necesitas ayuda?</p>
        </div>
    )
}

export default Login
