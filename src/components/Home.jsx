import React from 'react'
import '../assets/styles/Home.css'
import Navbar from '../components/NavBar'
import { connect } from 'react-redux';
import { auth } from "../firebase-config";
import { useHistory } from "react-router-dom";
import perfil from '../assets/image/default_profile.jpg';

const Home = ({user}) => {

    return (
        <>
            <Navbar />
            <div className='photo-post'>
             { user != null && user.photoURL != null   ? 
                (<img alt='fotoperfil' src={user.photoURL}/>) : 
                (<img alt='fotoperfil' src={perfil}/>)
             } 
             <input className='input-post' type="text" placeholder='¿Qué estás pensando?'/>
            </div>
           
        </>
    )
}

const MapStateToProps = state => {
    return { user : state.user}
}

export default connect(MapStateToProps, null)(Home);

