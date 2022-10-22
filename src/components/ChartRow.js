import React from 'react';
import {Link} from 'react-router-dom';


function ChartRow(props){
    return (
                <tr>
                    <td> 
                    <Link to="/detalleDeProducto">
                    {props.Title}
                    </Link>
                    </td>
                    <td>{props.Length}</td>
                    <td>{props.Rating}</td>
                    <td>
                        <ul>
                            {props.Categories.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul>
                    </td>
                    <td>{props.Awards}</td>
                </tr>
            )
    }
    
        

export default ChartRow;