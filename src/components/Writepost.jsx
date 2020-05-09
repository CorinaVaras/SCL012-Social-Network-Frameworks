import React, { useState } from 'react'
import { db } from '../firebase-config';
import { setPosts } from '../actions/index';
import { connect } from 'react-redux';
import perfil from '../assets/image/default_profile.jpg';

const Writepost = ({posts, user, setPosts}) => {

    const [inputPost, setInputPost ] = useState('')
    const agregar = async () => {
        try{ 
            const newPost = {
                mensaje: inputPost,
                fecha: Date.now()
            }
            const data = await db.collection('posts').add(newPost)
            
            setPosts({
                posts:[
                         ...posts, 
                        {...newPost, id: data.id}
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
