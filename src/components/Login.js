import React, { Component } from 'react';
import '../assets/styles/Login.css'

class Login extends Component {
    render() {
        return (
            <div className='container-login'> 
                <div className='container-form'>
                    <h1 className='title-login'>Iniciar Sesión</h1>
                    <form>
                        <div className='input-form'>
                            <input className='input-login' placeholder='Usuario o correo electrónico'/>
                        </div>
                        <div className='input-form'>
                            <input className='input-login' placeholder='Contraseña'/>
                        </div>
                        <div className='btn-form'>
                            <button className='btn-login'>Iniciar Sesión</button>
                        </div>
                        <div className='btn-form'>
                            <button className='btn-google'><i class="fab fa-google"></i> Google</button>
                        </div>
                    </form>
                    <a className='recupera'>¿Olvidaste tu contraseña? Recuperala aquí</a>
                    <a className='aqui'>Crea tu cuenta AQUI</a>
                </div>
            </div>
        );
    }
}

export default Login;