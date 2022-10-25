import React, { useEffect, useState } from 'react';


function Search() {

	let products = [];

	const [keyword, setKeyword] = useState([]);

	const searchProduct = e => {
		e.preventDefault();
		let product = e.target.product.value;
		setKeyword (product);
	}

	// Inicialmente se listan todos los productos
	useEffect( () => {
		fetch('http://localhost:3040/api/products/')
		.then(response => response.json())
		.then(data => {
			products = data.data.products;
			})
		}, [] )

	// Al ingresar un argumento de búsqueda y cambiar el estado de keyword se dispara este fetch
	useEffect( () => {
		if(keyword.length > 0) {
			fetch('http://localhost:3040/api/products/?search=' + keyword)
			.then(response => response.json())
			.then(data => {
				products = data.data.products;
			})
		}
	}, [keyword] )

	
	return(
		<div className="container-fluid">
			{/* {
				apiKey !== '' ? */}
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form onSubmit={searchProduct} method="GET">
								<div className="form-group">
									<label htmlFor="">Buscar producto:</label>
									<input type="text" name='product' className="form-control" />
								</div>
								<button className="btn btn-info">Buscador</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Productos para la palabra: {keyword}</h2>
						</div>
						{/* Listado de películas */}
						{
							products.length >= 0 && products.map((product, i) => {

								// productImage = 'C:/Users/Guido/Desktop/ProyectoIntegrador/public' + product.img;

								
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
								
														src={product.img}
														alt={product.name} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{product.categoryName}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ products.length === 0 && <div className="alert alert-warning text-center">No se encontraron productos</div>}
				</>
			{/* 	:
			 	<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			 } */}
		</div>
	)
}

export default Search;
