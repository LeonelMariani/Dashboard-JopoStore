import React from 'react';
import imagenFondo from '../assets/images/404.png';

function NotFound(){
    return(
        <div className="text-center">
            <h1>404 Not Found</h1>
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 30 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
        </div>
        
    )
}


export default NotFound;

// <React.Fragment>
// <div className= "notFound">
//    <h2>
//        404 Not Found
//    </h2>
//    <p>Pruebe ingresando en el siguiente enlace:</p>

//    <Link to="/" className="nav-link collapsed">
//                 <span>Dashboard-DH Movies</span>
//             </Link>

// </div>

// </React.Fragment>