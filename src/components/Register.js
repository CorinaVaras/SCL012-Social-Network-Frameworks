import React, { useState } from 'react';
import { firebase } from '../firebase-config'

const Register = () => {

    const [ email, setEmail] = useState(' ');
    const [ password, setPassword ] = useState(' ');
    const [ name, setName ] = useState(' ');
    
    const signIn = async (e) => {
        e.preventDefault()
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log('se registró un nuevo usuario')
    }

    return (
            <div className='container-login'> 
                <div className='container-form'>
                    <h1 className='title-login'>Crear Cuenta</h1>
                    <form onSubmit={signIn}>
                        
                        <div className='input-form'>
                            <input 
                            className='input-login'
                            type='name'
                            placeholder='Ingrese Nombre'   
                            onChange={(e) => setName(e.target.value)}
                            value={name}                       
                            />
                        </div>
                        <div className='input-form'>
                        
                            <input 
                            className='input-login' 
                            type='email' 
                            placeholder='Ingrese email'
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
                            <button type='submit' className='btn-login'>Crear Cuenta</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        );
   
}

export default Register;