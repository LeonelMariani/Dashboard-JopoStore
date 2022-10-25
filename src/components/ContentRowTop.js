import { React, useEffect, useState } from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowQuantity from './ContentRowQuantity';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb';
import Chart from './Chart';
import Search from './Search';
import ProductDetail from './ProductDetail';
import NotFound from './NotFound'
import { Route, Switch } from "react-router-dom";


function ContentRowTop(){

	const [products, setProducts] = useState ( [] );
	const [lastProduct, setLastProduct] = useState ( {} );

    useEffect( () => {

		fetch ( 'http://localhost:3040/api/products/' )
            .then ( response => response.json() )
            .then ( data => {
                setProducts (data.data.products);
	            } )
			.catch ( error => console.log (error))
	}, [] );

	useEffect ( () => {
		// obtener el máximo id, que es el del último producto ingresado. Luego obtener el lastProduct
		let maxId = Math.max.apply ( Math, products.map ( product => {return product.id} ));
	
		setLastProduct( products.find ( product => product.id = maxId) );

	}, [products]);


	return(
				
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Panel App</h1>
					</div>
				
					<Switch>
						<Route path="/totales" component={ContentRowQuantity} />
						<Route path="/ultimoProducto" component={LastProductInDb} />
						<Route path="/categorias" component={CategoriesInDb} />
						<Route path="/listaDeproductos" component={Chart} />
						<Route path="/buscador" component={Search} />
						<Route path="/detalleDeProducto" component={ProductDetail} />
						<Route exact path="/" component={ContentRowCenter} />
						<Route component={NotFound} />
					</Switch>
	
				</div>
	     
    )

}
export default ContentRowTop;