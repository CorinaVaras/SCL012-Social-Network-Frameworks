import React from "react";
import Navbar from "../components/NavBar";
import { connect } from "react-redux";
import { setPosts } from "../actions/index";
import Readpost from "./Readpost";
import Writepost from "./Writepost";
import { db } from '../firebase-config';

const Home = () => {

  const obtenerDatos = async () => {
    try {
      const data = await db.collection("posts").get();
      const allData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

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
      <Writepost />
      <Readpost />
    </>
  );
};

const mapDispachToProps = { setPosts };

export default connect(null, mapDispachToProps)(Home);
