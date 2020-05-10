import React, { useState } from "react";
import "../assets/styles/Login.css";
import { firebase, auth } from "../firebase-config";
import { Link, useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { setUser } from '../actions/index';



const Login = ({setUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const login = async (e) => {
    e.preventDefault();
    await firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => { setUser({ user: res})
        history.push('/home')
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode, errorMessage)
      });

  };

  const signUpGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
  
    auth.signInWithPopup(provider)
    .then((result) => {
      setUser({ user: result.user })
      console.log(JSON.stringify(result))
      history.push('/home')
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(errorCode, errorMessage)
    });
  };

  return (
    <div className="container-login">
      <div className="container-form">
        <h1 className="title-login">Makeup Colors </h1>
        <form onSubmit={login}>
          <div className="input-form">
            <input
              className="input-login"
              type="email"
              placeholder="Usuario o correo electrónico"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="input-form">
            <input
              className="input-login"
              type="password"
              placeholder="Contraseña"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="btn-form">
            <button type="submit" className="btn-login">
              Iniciar Sesión
            </button>
          </div>
          <div className="btn-form">
            <button className="btn-google" onClick={signUpGoogle}>
              <i className="fab fa-google"></i> Google
            </button>
          </div>
        </form>
        {/* <a href='null' style={{ color: "white" }} className="recupera">
          ¿Olvidaste tu contraseña? Recuperala aquí
        </a> */}
        <Link to="/registrarse">
          <div className='aqui'>
          <a href='null'  className="aqui">Crea tu cuenta AQUI</a>
          </div>
        </Link>
      </div>
    </div>
  );
};

const MapStateToProps = state => {
    return { user : state.user}
}
const MapDispatchToProps = { setUser }

export default connect(MapStateToProps, MapDispatchToProps)(Login);

