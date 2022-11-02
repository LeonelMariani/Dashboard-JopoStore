import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

function ProductDetail(props) {
    const id=Number(props.match.params.id)

    const [products, setProducts]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3040/api/products')
        .then(response=>response.json())
        .then(products=>setProducts(products.data.products))
    },[])

    const product= products.find(oneProduct=> oneProduct.id===id)
    

    return (
       
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Nombre de producto</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }}  alt=" tocadiscos-4 " />
                    </div>

                    {
                        product &&
                         <ul>
                         <li>Nombre:{product.name}</li>
                         <li>Precio:{product.price}</li>

                        {
                            product.discount &&
                            <li>Descuento:{product.discount}</li>
                        }

                         <li>Descripción:{product.description}</li>
                         <li>URL:{product.url}</li>

                         
                        {
                            product.colors.map((color,index)=>{
                                 return <li key={color + index}> Color: {color.name} </li>
                                    })        
                        }     
                       
                        <li>Categoría: {product.categoryName}</li>
                        </ul>

                    }
                   

                    <Link to="/listaDeProductos" className="btn btn-danger" rel="nofollow">Lista completa</Link>

                </div>
            </div>
        </div>

    )
}

export default ProductDetail;