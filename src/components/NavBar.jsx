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
            <img style={{ width: "45px", height: "45px" }} alt="menuIcon" src={menu}/>
         </label>
        <input type="checkbox" id="toggle" />

        <div className='container-nav'> 
            <div className='item-perfil'>
            <i class="fas fa-user-circle"></i>  
            <div style={{marginLeft: '10px'}}>{user.user.email}</div>
            </div>

            <div className='item-salir'> 
            <i onClick={() => closeSession()} class="fas fa-sign-out-alt"></i>      
            {/* <div style={{marginLeft: '10px'}}>Cerrar sesión</div> */}
            </div>
        </div>
        </>
    )
}


const MapStateToProps = state => {
    return { user : state.user}
}

export default connect(MapStateToProps, null)(NavBar);


