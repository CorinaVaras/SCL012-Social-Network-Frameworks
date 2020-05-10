import React from 'react'
import '../assets/styles/Navbar.css'
import menu from '../assets/image/menuIcon.png'
import { connect } from 'react-redux';
import { auth } from "../firebase-config";
import { useHistory } from "react-router-dom";
import perfil from "../assets/image/default_profile.jpg";


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
        <div className='container-nav'> 
            
            <div className='dropdown'> 
             <img className="photo-post-img dropbtn" alt="fotoperfil" src={perfil} />     
            <div className='dropdown-content'>
                <a>Ver mi perfil</a>
                <a onClick={() => closeSession()} >Cerrar Sesión</a>
            </div>
            </div>
            
        </div>
        </>
    )
}


const MapStateToProps = state => {
    return { user : state.user}
}

export default connect(MapStateToProps, null)(NavBar);


