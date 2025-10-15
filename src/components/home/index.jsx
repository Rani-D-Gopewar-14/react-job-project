import { Link } from 'react-router-dom';
import Header from '../header';
import './index.css'; 


const Home = ()=> {

    return (

         <>
            <Header/>
            <div className='home-cont'>
                        <h1> Welcom To Our Application find your dream job!!!</h1>

                        <br /><br />

                        <Link to = "/jobs" className='btn btn-primary'>Find Jobs</Link>

            </div>
        
        </>
    )
}


export default Home;