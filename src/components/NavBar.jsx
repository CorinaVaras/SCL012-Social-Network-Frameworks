import React from 'react'
import '../assets/styles/Navbar.css'
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
            {user.photoURL != null ? (
                <img
                  className="photo-post-img"
                  alt="fotoperfil"
                  src={user.photoURL}
                />
              ) : (
                <img className="photo-post-img" alt="fotoperfil" src={perfil} />
              )}     
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


