import React from "react";
import { connect } from "react-redux";

// import borrar from "../assets/image/delete.svg";
// import editar from "../assets/image/editar.svg";
// import { db } from "../firebase-config";
import { setPosts } from "../actions/index";
import "../assets/styles/Readpost.css";

const Readpost = ({ posts, user, setPosts }) => {
  return (
    <div>
      {/* {posts.map((item) => (
        <div className="photo-post" key={item.id}>
          {user != null && user.photoURL != null ? (
            <img  className='photo-post-img' alt="fotoperfil" src={user.photoURL} />
          ) : (
            <img  className='photo-post-img' alt="fotoperfil" src={perfil} />
          )}
          
          <div className="input-read" type="text">
            <div>  
              <span className='username'>{user.displayName}</span>
            </div>

            <div style={{marginBottom: '1em'}}>  
              <span className='dateStamp'>Sábado, 9 de Mayo</span>
            </div>

            <div>{item.mensaje}</div>

            <div className='container-options'>
              <img className='editar' src={editar} alt='edit' title='Editar Mensaje' />
              <img className='delete' src={borrar} alt='delete' title='Borrar Mensaje' />
            </div>

          </div>
          
        </div>
      ))} */}

      <div className="photo-post">
       
        <div className="input-read" type="text">
          <div className='header-post'>
            <span className="username">Corina Varas</span>
            <div>
            <div className="container-options">
            <p className="editar" >Editar |</p>
            <p className="editar">Eliminar</p>
          </div>
          </div>
          </div>
          <div style={{ marginBottom: "1em" }}>
            <span className="dateStamp">Sábado, 9 de Mayo</span>
          </div>
          <div className='text-post'>
            Soy un posts Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nesciunt asperiores nihil voluptas voluptatem perspiciatis,
            numquam a est in. Maiores voluptates harum dolores porro officiis
            deleniti sequi id consequatur obcaecati ex.
          </div>
          <hr/>
          <div className="container-like">
          <i className="fas fa-heart like"></i>
          <p>Me gusta</p>
          </div>
          
        </div>
      </div>

      
    </div>
  );
};

// Me traigo el estado del reducer y los agrego a las props
const MapStateToProps = (state) => {
  return { posts: state.posts, user: state.user };
};

// Funcion que me traigo del action, y la agrego a las props
const mapDispachToProps = { setPosts };

export default connect(MapStateToProps, mapDispachToProps)(Readpost);
