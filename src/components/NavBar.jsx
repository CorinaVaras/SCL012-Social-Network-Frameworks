import React from 'react'
import '../assets/styles/Navbar.css'
import menu from '../assets/image/menuIcon.png'
import { connect } from 'react-redux';


const NavBar = ({user}) => {

    // console.log('El usuario está logeado ' + JSON.stringify(user));


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
            <i class="fas fa-sign-out-alt"></i>      
            <div style={{marginLeft: '10px'}}>Cerrar sesión</div>
            </div>
        </div>
        </>
    )
}


const MapStateToProps = state => {
    return { user : state.user}
}

export default connect(MapStateToProps, null)(NavBar);


