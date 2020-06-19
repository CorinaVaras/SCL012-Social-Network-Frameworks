import React from "react";
import { connect } from "react-redux";
import perfil from "../assets/image/default_profile.jpg";
import { setPosts } from "../actions/index";
import "../assets/styles/Readpost.css";
import { db } from "../firebase-config";
import moment from 'moment';
import 'moment/locale/es'

const Readpost = ({ posts, setPosts,user }) => {


  const eliminar = async (id) => {
    try {
      await db.collection("posts").doc(id).delete();
      const arrayFiltrado = posts.filter((item) => item.id !== id);
      setPosts({
        posts: arrayFiltrado,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const edit = (id) => {
    let currentPost = [...posts];
    posts.forEach((item) => {
        if (id === item.id) {
          item.enableEdit = !item.enableEdit;

          if (item.enableEdit === false) {
            item.mensaje = document.getElementById(`mensaje-${id}`).value;
            db.collection('posts').doc(item.id).update({ 
              mensaje: item.mensaje,
            });
          }
        } else {
          item.enableEdit = false;
        }
      });
      setPosts({
        posts: currentPost,
      });
  };

  const like = (item) => {
    try {
    if (item.like === null || item.like === '') {
      item.like = [];
    }

    if (item.like.includes(user.email)) {
      for (let i = 0; i < item.like.length; i++) {
        if (item.like[i] === user.email) { // verifica si ya el usuario está en el array
          item.like.splice(i, 1); // sentencia para eliminar un elemento de un array

          db.collection('posts').doc(item.id).update({ // para actualizar el array
            like: item.like,
          });
        }
      }
    } else {
      item.like.push(user.email);
      db.collection('posts').doc(item.id).update({
        like: item.like,
      });
    }

    let currentPost = [...posts];
    currentPost.forEach((post) => {
      if (item.id === posts.id) {
        post = item
      }
    })

    setPosts({
      posts: currentPost,
    })
       
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {posts.map((item) => (
        <div key={item.id}>
          <div>
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
                    <img
                      className="photo-post-img"
                      alt="fotoperfil"
                      src={perfil}
                    />
                  )}
                  <div className="name-date">
                    <span className="username">{item.name}</span>
                  <span className="dateStamp">{moment(item.fecha).format('LLL')}</span>
                  </div>
                  <div></div>
                </div>

                {item.enableEdit === true ? (
                  <textarea id={`mensaje-${item.id}`} className="text-post">
                    {item.mensaje}
                  </textarea>
                ) : (
                  <div className="text-post">{item.mensaje}</div>
                )}
                <hr />
                <div className="container-like">
                  <div className="container-options">
                    <span id={`like-${item.id}`}>{item.like.length}</span>
                    <i onClick={() => like(item)} className="fas fa-heart like"></i>Me gusta
                  </div>
                  {
                    item.email === user.email ? (
                      <div className="container-options">
                        <p onClick={() => edit(item.id)} className="editar">Editar</p>|
                        <p onClick={() => eliminar(item.id)} className="editar">Eliminar</p>
                      </div>
                    ) : (
                      null
                    )}
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
    user: state.user,
  };
};

// Funcion que me traigo del action, y la agrego a las props
const mapDispachToProps = { setPosts };

export default connect(MapStateToProps, mapDispachToProps)(Readpost);
