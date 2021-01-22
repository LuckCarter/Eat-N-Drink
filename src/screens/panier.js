import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/index';
import styled from 'styled-components';
import { Button } from '../globalStyles';


const Panier = () => {
    const [pan] =useState(JSON.parse(localStorage.getItem('panier')))
    useEffect(() => {
        console.log('Panier -> pan', pan)
    })
    return (
        <div>
            <Navbar></Navbar>
            <PanierTitle>
                PANIER
            </PanierTitle>

            {pan.map(product => (      
            <div key={product.name}>
                <PanierLink to={`/details/${product.name}`}>
                    <p>{product.name}</p>
                    <PriceLink>{product.price}</PriceLink>
                </PanierLink>
            </div>
            ))}
            <PanierButton>
                <Button>Payer</Button>
            </PanierButton>
            <Footer></Footer>
        </div>
    );
};

export default Panier;

export const PanierTitle = styled.h1`
  font-size: 1rem;
  text-align: center;
  color:#db80ff;
  text-transform:uppercase;
`;

export const PanierLink = styled.a`
  color: #fff;
  font-size: 20px;
  text-align: center;
`;

export const PriceLink = styled.p`
  color: #43baff;
  font-size: 14px;
  
`;
export const PanierButton = styled.button`
  background: black;
  font-size: 14px;
  text-align: center;
  border:none;  
  margin-left:22%;
  margin-rigth:22%;
`;

