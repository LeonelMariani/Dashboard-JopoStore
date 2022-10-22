import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Productos en base de datos',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:'Clientes en base de datos', 
    color:'success', 
    cuantity: '79',
    icon:'fa-user-check'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Categorias en base de datos' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-fw fa-folder'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowMovies(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;