import React from 'react'
import '../assets/styles/Navbar.css'

const NavBar = () => {
    return (
        <div className='container-nav'> 
            <div className='item-perfil'>
            <i class="fas fa-user-circle"></i>  
            <div >Perfil</div>
            </div>

            <div className='item-salir'>
            <i class="fas fa-sign-out-alt"></i>      
            <div>Cerrar sesión</div>
            </div>
        </div>
    )
}

export default NavBar
