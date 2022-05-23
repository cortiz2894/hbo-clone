
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
            <button>INICIAR SESION</button>
        </div>
    )
}

export default Login
