import React from "react";
import { connect } from "react-redux";
import perfil from "../assets/image/default_profile.jpg";
import { setPosts } from "../actions/index";
import "../assets/styles/Readpost.css";

const Readpost = ({ posts }) => {
  
  return (
    <div>
      {posts.map((item) => (
        <div key={item.id}>
         <div>
          <div className="input-read" type="text">
            <div className="header-post">
                   
                  {item.photoURL != null ? (
                    <img
                      className="photo-post-img"
                      alt="fotoperfil"
                      src={item.photoURL}
                    />
                  ) : (
                    <img className="photo-post-img" alt="fotoperfil" src={perfil} />
                  )}
                  <div className="name-date">
                  <span className="username">{item.name}</span>
                  <span className="dateStamp">Sábado, 9 de Mayo</span>
                  </div>  
            <div> 
          </div>
        </div>
            
          <div className="text-post">
            {item.mensaje}
          </div>
          <hr />
          <div className="container-like">
            <div className="container-options">
              <i className="fas fa-heart like"></i>
              <p>Me gusta</p>
            </div>
          <div className="container-options">
              <p className="editar">Editar |</p>
              <p className="editar">Eliminar</p>
          </div>
          </div>
          </div>
          </div>
        </div>  
      ))}
    </div>
  );
};

// Me traigo el estado del reducer y los agrego a las props
const MapStateToProps = (state) => {
  return { 
    posts: state.posts,
     user: state.user
     };
};

// Funcion que me traigo del action, y la agrego a las props
const mapDispachToProps = { setPosts };

export default connect(MapStateToProps, mapDispachToProps)(Readpost);
