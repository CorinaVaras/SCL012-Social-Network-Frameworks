import  React,{ useEffect } from 'react'
import '../assets/styles/Home.css'
import Navbar from '../components/NavBar'
import { connect } from 'react-redux';
import perfil from '../assets/image/default_profile.jpg';
import { db, firebase } from '../firebase-config';

const Home = ({user}) => {

    useEffect(() => {

        const getPost = async () => {
        try{
           
          const post = await db.collection('posts').get()
          console.log(post.docs)  

        } catch (error) {
            console.error(error)
        }    

        }
        getPost();
      
    }, [])

    return (
        <>
            <Navbar />
            <div className='photo-post'>
             { user != null && user.photoURL != null   ? 
                (<img alt='fotoperfil' src={user.photoURL}/>) : 
                (<img alt='fotoperfil' src={perfil}/>)
             } 
             <textarea className='input-post' type="text" placeholder='¿Qué estás pensando?'/>
            </div>
           
        </>
    )
}

const MapStateToProps = state => {
    return { user : state.user}
}

export default connect(MapStateToProps, null)(Home);

