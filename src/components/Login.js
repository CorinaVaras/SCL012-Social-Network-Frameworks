import React, { useState } from 'react';
import '../assets/styles/Login.css'
import { firebase } from '../firebase-config'
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { setUser } from '../actions/index';

const Login = () => {

    const [ email, setEmail] = useState('');
    const [ password, setPassword ] = useState('');


    const login = async (e) => {
        e.preventDefault()
        await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log('se inició sesión')
    }
    

    
        return (
            <div className='container-login'> 
                <div className='container-form'>
                    <h1 className='title-login'>Iniciar Sesión</h1>
                    <form onSubmit={login}>
                        <div className='input-form'>
                            <input 
                            className='input-login'
                            type='email'
                            placeholder='Usuario o correo electrónico'   
                            onChange={(e)=> setEmail(e.target.value)} 
                            value={email}                       
                            />
                        </div>
                        <div className='input-form'>
                            <input 
                            className='input-login' 
                            type='password' 
                            placeholder='Contraseña'
                            onChange={(e)=> setPassword(e.target.value)} 
                            value={password}
                            />
                        </div>
                        <div className='btn-form'>
                        <Link to='/home'>
                            <button type='submit' className='btn-login'>Iniciar Sesión</button>
                        </Link>    
                        </div>
                        <div className='btn-form'>
                            <button className='btn-google'><i className="fab fa-google"></i> Google</button>
                        </div> 
                    </form>
                    <a style={{color: 'white'}} className='recupera'>¿Olvidaste tu contraseña? Recuperala aquí</a>
                    <Link to='/registrarse'>
                    <a style={{color: 'white'}} className='aqui'>Crea tu cuenta AQUI</a>
                    </Link>

                </div>
            </div>
        );
    
}




// const MapStateToProps = state => {
//     return { user : state.user}
// }
// const MapDispatchToProps = { setUser }



// export default connect(MapStateToProps, MapDispatchToProps)(Login);
export default Login;