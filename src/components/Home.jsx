import React from 'react'
import '../assets/styles/Home.css'
import Navbar from '../components/NavBar'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='container-home'>
            <div className='container-box'>
            <textarea className='input-post'type='text'/>
            <div className='container-btn'>
            <button className='btn-post'>Publicar</button>
            </div>
            </div>
            </div>
        </>
    )
}

export default Home

