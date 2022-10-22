import React from 'react';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb';
import ContentRowQuantity from './ContentRowQuantity';
import Chart from './Chart';

function ContentRowCenter(){
    return (
        <div className="row">
        <ContentRowQuantity />
        <LastProductInDb />
        <CategoriesInDb />
        <Chart />
            </div>
    )
}

export default ContentRowCenter;