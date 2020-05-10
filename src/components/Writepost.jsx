import React, { useState } from 'react'
import { db } from '../firebase-config';
import { setPosts } from '../actions/index';
import { connect } from 'react-redux';
import perfil from '../assets/image/default_profile.jpg';
import '../assets/styles/Writepost.css'

const Writepost = ({posts, user, setPosts}) => {

    const [inputPost, setInputPost ] = useState('')
    const agregar = async () => {
        try{ 
            const newPost = {
                mensaje: inputPost,
                fecha: Date.now(),
                name: user.displayName,
                photoURL: user.photoURL
            }
            const data = await db.collection('posts').add(newPost)
            
            setPosts({
                posts:[
                         ...posts, 
                        {...newPost, 
                            id: data.id,
                        }
                     ]
                    })

            setInputPost('')
          }catch (err){
            const errorCode = err.code;
            const errorMessage = err.message;
            console.log(errorCode, errorMessage)
          };
    }

    return (
        <div style={{marginTop: '8em'}}>
            <div className='container-post'> 
                
                    <textarea className='input-post' type="text" onChange={ e => setInputPost(e.target.value)} value={inputPost} placeholder='¿Qué estás pensando?'/> 
                
                <div className='publicar'>
                    <button onClick={() => agregar()}>Publicar</button>
                </div>
            </div>
        </div>    
    )
}

// Me traigo el estado del reducer y los agrego a las props
const MapStateToProps = state => {
    return { posts : state.posts,
             user: state.user}
}

// Funcion que me traigo del action, y la agrego a las props
const mapDispachToProps = {setPosts};

export default connect(MapStateToProps, mapDispachToProps)(Writepost);
