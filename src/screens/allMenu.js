import React from 'react';
import Products from '../components/Products/index';
import { productEntreeData, productPlatsData, productFromagesData, productDessertsData, productBoissonsData, productPlatDuJourData } from '../components/Products/data';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/index';


const allMenu = () => {
    return (
        <div>
            <Navbar/>
            <Products heading='Entrée' data={productEntreeData} />
            <Products heading='Plats' data={productPlatsData} />
            <Products heading='Fromages' data={productFromagesData} />
            <Products heading='Desserts' data={productDessertsData} />
            <Products heading='Boissons' data={productBoissonsData} />
            <Products heading='Plat Du Jour' data={productPlatDuJourData} />
            <Footer/>
        </div>
    );
};


export default allMenu;

