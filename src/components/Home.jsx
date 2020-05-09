import  React from 'react'
import '../assets/styles/Home.css'
import Navbar from '../components/NavBar'
import { connect } from 'react-redux';
import { setPosts } from '../actions/index';
import Readpost from './Readpost';
import Writepost from './Writepost';


const Home = () => {
    return (
        <>
            <Navbar />
            <Writepost />
            <Readpost />
        </>
    )
}

const MapStateToProps = state => {
    return { user : state.user,
             posts: state.posts
            }
}

const mapDispachToProps = {setPosts}

export default connect(MapStateToProps, mapDispachToProps)(Home);

