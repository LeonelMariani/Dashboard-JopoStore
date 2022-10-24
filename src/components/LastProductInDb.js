import React from 'react';
import imagenFondo from '../assets/images/tocadiscos-4.jpg';
import {Link} from 'react-router-dom';

function LastProductInDb(){

    
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <Link  to="/detalleDeProducto" className="btn btn-danger" rel="nofollow">Detalle de producto</Link>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
