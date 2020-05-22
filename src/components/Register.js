import React, { useState, useCallback } from 'react';
import { auth } from '../firebase-config'
import { useHistory } from "react-router-dom";

const Register = () => {

    const [ email, setEmail] = useState('');
    const [ password, setPassword ] = useState('');
    const [ name, setName ] = useState('');
    const [ error, setError ] = useState(null);

    const history = useHistory();
    
    const signIn = async (e) => {
        e.preventDefault()

        if(!email.trim()){
            setError('Ingrese Email*')
            return
        }
        if(!password.trim()){
            setError('Ingrese password*')
            return
        }
        if(!password.length < 6){
            setError('Pasword debe tener 6 caracteres o más*')
            return
        }
        setError(null);  
        register();
    }

    const register = useCallback( async() => {
        try {
            const res = await auth.createUserWithEmailAndPassword(email, password)
            console.log(res.user);
            alert('Se ha creado correctamente tu cuenta!')
            history.push('/')

        } catch (error) {
            if(error.code === 'auth/invalid-email'){
                setError('Email no válido')
            }
            if(error.code === 'auth/email-already-in-use'){
                setError('Email ya esta registrado')
            }
        }
    }, [email, password]) 
   
    return (
            <div className='container-login'> 
                <div className='container-form'>
                    <h1 className='title-login'>Crear Cuenta</h1>
                    <form onSubmit={signIn}>
                        {
                            error && (
                                <div style={{color:'darkred'}}>
                                    {error}
                                </div>
                            )
                        }
                        
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
                            <button type='submit' onClick={() => register()} className='btn-login'>Crear Cuenta</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        );
   
}

export default Register;