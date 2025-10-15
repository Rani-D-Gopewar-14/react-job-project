import { Link } from 'react-router-dom';
import './index.css'; 


const Header = ()=>{


    return (

        <nav>
            <Link to="/" className='btn btn-danger'>Web Logo</Link>
                <ul className='nav-cont'>
                    <li>
                        <Link className='mr-4' to = "/">Home</Link>
                    </li>
                    <li>
                        <Link to = "/jobs">Jobs</Link>
                    </li>
                </ul>

                <button className='btn btn-primary'>Logout</button>
        </nav>
    )

}


export default Header;