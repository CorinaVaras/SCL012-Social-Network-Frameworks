import React from 'react'
import '../assets/styles/Navbar.css'
import menu from '../assets/image/menuIcon.png'
import { connect } from 'react-redux';
import { auth } from "../firebase-config";
import { useHistory } from "react-router-dom";


const NavBar = ({user}) => {

    
   const history = useHistory();
   
    const closeSession = () => {
        auth.signOut()
        .then(() => {
            console.log('Saliendo');
            history.push("/")
            
        })
        .catch((error) => {
            console.log(error);
        });
    };


    return (
        <>
        <label htmlFor="toggle">
            <img style={{ width: "40px", height: "40px" }} alt="menuIcon" src={menu}/>
         </label>
        <input type="checkbox" id="toggle" />

        <div className='container-nav'> 
            
            <div onClick={() => closeSession()} className='item-salir'> 
            <p>Cerrar Sesión</p>
            <i className="fas fa-sign-out-alt salir"></i>      
            </div>
        </div>
        </>
    )
}


const MapStateToProps = state => {
    return { user : state.user}
}

export default connect(MapStateToProps, null)(NavBar);


