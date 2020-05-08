import  React,{ useEffect, useState } from 'react'
import '../assets/styles/Home.css'
import Navbar from '../components/NavBar'
import { connect } from 'react-redux';
import perfil from '../assets/image/default_profile.jpg';
import { db } from '../firebase-config';

const Home = ({user}) => {

    const [posts, setPosts] = useState([])
    const [inputPost, setInputPost ] = useState('')

    useEffect(() => {
        const obtenerDatos = async () => {
            try{
                const data = await db.collection('posts').get()
                const allData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                console.log(allData)
                setPosts(allData)
            }catch (error){
                console.log(error)
            }
        }
            obtenerDatos()
    }, [])
    

    const agregar = async () => {
        
        try{ 
            const newPost = {
                mensaje: inputPost,
                fecha: Date.now()
            }
            const data = await db.collection('posts').add(newPost)
            setPosts([
                ...posts, 
                {...newPost, id: data.id}
            ])
            setInputPost('')
            
            
          }catch (err){
            const errorCode = err.code;
            const errorMessage = err.message;
            console.log(errorCode, errorMessage)
          };
          
    }

    return (
        <>
            <Navbar />
            <div className='container-post'> 
                <div className='photo-post'>
                    { user != null && user.photoURL != null   ? 
                        (<img alt='fotoperfil' src={user.photoURL}/>) : 
                        (<img alt='fotoperfil' src={perfil}/>)
                    } 
                    <textarea className='input-post' type="text" onChange={ e => setInputPost(e.target.value)} value={inputPost} placeholder='¿Qué estás pensando?'/> 
                </div>
                <div className='publicar'>
                    <p onClick={() => agregar()} >Publicar</p>
                </div>
            </div>
       
                 {
                    posts.map(item => (
                        
                            <div className='photo-post' key={item.id}>
                                { user != null && user.photoURL != null   ? 
                                    (<img alt='fotoperfil' src={user.photoURL}/>) : 
                                    (<img alt='fotoperfil' src={perfil}/>)
                                } 
                                <div className='input-post post' type='text'>
                                {item.mensaje}           
                                </div>
                            </div>        
                    ))
                    }
                
            
           
        </>
    )
}

const MapStateToProps = state => {
    return { user : state.user}
}

export default connect(MapStateToProps, null)(Home);

