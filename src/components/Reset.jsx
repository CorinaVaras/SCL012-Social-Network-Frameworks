import React from 'react'
import {auth} from '../firebase-config'
import {useHistory } from "react-router-dom";

const Reset = () => {

    const history = useHistory();

    const [email, setEmail ] = React.useState('')
    const [error, setError] = React.useState(null)

    const resetPass = e => {
        e.preventDefault()
        if(!email.trim()){
            setError('Datos vacios')
            return
        }

        setError(null)

        recover()
    }

    const recover = React.useCallback(async () => {
        try {
            await auth.sendPasswordResetEmail(email)
            history.push("/login");
            console.log('correo enviado')

        } catch (error) {
            console.log(error)
            setError(error.message)
        }

    }, [email])



    return (
        <div className="container-login">
      <div className="container-form">
        <h1 className="title-login">Reiniciar Contraseña</h1>
        <form onSubmit={resetPass}>
          <div className="input-form">
            <input
              className="input-login"
              type="email"
              placeholder="Ingresa tu correo"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          
          <div className="btn-form">
            <button className="btn-login">Enviar</button>
          </div>
         
        </form>
        
        

     
      </div>
    </div>
    )
}

export default Reset
