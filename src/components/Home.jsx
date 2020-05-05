import React from 'react'
import '../assets/styles/Home.css'
import Navbar from '../components/NavBar'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='container-home'>

                <i class="far fa-user-circle" style={{fontSize: '40px'}}></i>  

                <div className='colum-post-btn'>
                    <input type="text" placeholder='¿Qué estas pensado?'/>
                </div>    
                  
            
            </div>
        </>
    )
}

export default Home

{/* <div className='container-box'>
            <input className='input-post' type='text'/>
            <div className='container-btn'>
            <button className='btn-post'>Publicar</button>
            </div>
            </div> */}