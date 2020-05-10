import React from "react";
import Navbar from "../components/NavBar";
import { connect } from "react-redux";
import { setPosts } from "../actions/index";
import Readpost from "./Readpost";
import Writepost from "./Writepost";
import { db } from '../firebase-config';
import '../assets/styles/Home.css'
import publicidad from '../assets/image/off.png'


const Home = ({setPosts}) => {

  const obtenerDatos = async () => {
    try {
      const data = await db.collection("posts").get();
      const allData = await data.docs.map((doc) => ({
         id: doc.id,
         name: doc.name,
         photoURL: doc.photoURL, 
         ...doc.data() }));
      
      setPosts({
        posts: allData,
      });

    } catch (error) {
      console.log(error);
    }
  };

  obtenerDatos();

  return (
    <>
      <Navbar />
      <div className='home-row'>
        <div className='column1'>
        <p>colum 1</p>  
        </div>  
        <div className='muro'>
          <Writepost />
          <Readpost />
        </div>
        <div className='publicidad'>
          <div className='contenido-publicidad'>
            <div className='header-publidad'>
              <p style={{ fontWeight: '500', color: 'gray', marginBottom: '20px'}}>Publicidad</p> 
              <p style={{fontSize: '15px', color:'gray'}}>Crear un anuncio</p>
            </div>
            <img alt='publicidad' style={{width: '250px', height: '250px', margin: '10px'}}src={publicidad}/>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispachToProps = { setPosts };

export default connect(null, mapDispachToProps)(Home);
