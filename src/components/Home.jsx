import React from "react";
import Navbar from "../components/NavBar";
import { connect } from "react-redux";
import { setPosts } from "../actions/index";
import Readpost from "./Readpost";
import Writepost from "./Writepost";
import { db } from "../firebase-config";
import "../assets/styles/Home.css";
import publicidad from "../assets/image/off.png";
import maho from "../assets/image/maho1.png";
import marca from "../assets/image/marca2.png";
import { setUser } from "../actions/index";


const Home = ({ setPosts,setUser }) => {

  React.useEffect(() => {
    if (localStorage.getItem("user")) {
      let currentUser = localStorage.getItem("user");
      setUser({ user: JSON.parse(currentUser) });
    } 
  }, [setUser])
  

  const obtenerDatos = async () => {
    try {
      const data = await db.collection("posts").orderBy("fecha", "desc").get();

      const allData = await data.docs.map((doc) => ({
        id: doc.id,
        name: doc.name,
        fecha: Date.now(),
        photoURL: doc.photoURL,
        enableEdit: false,
        like: [],
        email: doc.email,
        ...doc.data(),
      }));

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
      <div className="home-row">
        <div className="column1">
          <div className="column-body">
            <p
              style={{ fontWeight: "500", color: "gray", marginBottom: "20px" }}
            >
              Marcas patrocinantes
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                alt='Patrocinante Maho Beauty'
                style={{ width: "200px", height: "200px", marginBottom: "1em" }}
                src={maho}
              />
              <img 
                alt='Patrocinante Tommy Mead beauty'
                style={{ width: "250px", height: "200px" }} 
                src={marca} />
            </div>
          </div>
        </div>
        <div className="muro">
          <Writepost />
          <Readpost />
        </div>
        <div className="publicidad">
          <div className="contenido-publicidad">
            <div className="header-publidad">
              <p
                style={{
                  fontWeight: "500",
                  color: "gray",
                  marginBottom: "20px",
                }}
              >
                Publicidad
              </p>
              <p style={{ fontSize: "15px", color: "gray" }}>
                Crear un anuncio
              </p>
            </div>
            <img
              alt="publicidad"
              style={{ width: "250px", height: "250px", margin: "10px" }}
              src={publicidad}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispachToProps = { setPosts, setUser };

export default connect(null, mapDispachToProps)(Home);
