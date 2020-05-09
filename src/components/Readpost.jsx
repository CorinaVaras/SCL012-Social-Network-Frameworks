import React from "react";
import { connect } from 'react-redux';
import perfil from '../assets/image/default_profile.jpg';
import { db } from '../firebase-config';
import { setPosts } from '../actions/index';

const Readpost = ({posts, user, setPosts}) => {

  const obtenerDatos = async () => {
    try{
        const data = await db.collection('posts').get()
        const allData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        
        setPosts({
            posts: allData
        })

    }catch (error){
        console.log(error)
    }
}

obtenerDatos()

  return (
    <div>
      {posts.map((item) => (
        <div className="photo-post" key={item.id}>
          {user != null && user.photoURL != null ? (
            <img alt="fotoperfil" src={user.photoURL} />
          ) : (
            <img alt="fotoperfil" src={perfil} />
          )}
          <div className="input-post post" type="text">
            {item.mensaje}
          </div>
        </div>
      ))}
    </div>
  );
};

// Me traigo el estado del reducer y los agrego a las props
const MapStateToProps = state => {
    return { posts : state.posts,
             user: state.user}
}

// Funcion que me traigo del action, y la agrego a las props
const mapDispachToProps = {setPosts};

export default connect(MapStateToProps, mapDispachToProps)(Readpost);

