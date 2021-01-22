import React from 'react';
import { Link } from 'react-router-dom';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductsElements';


const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          const handlePanier = commandePanier =>{
            console.log("handlePanier -> commandePanier",commandePanier)
            const currentPanier = localStorage.getItem('panier') 
              ? JSON.parse(localStorage.getItem('panier'))
              :[]
            currentPanier.push(commandePanier)
            console.log("handlePanier -> currentPanier", currentPanier)
            localStorage.setItem('panier', JSON.stringify(currentPanier))
          }
          return (
            <ProductCard key={index}>
              <Link to={`/details/${product.name}`}>
                <ProductImg src={product.img} alt={product.alt} />
              </Link>
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>             
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton onClick={() => handlePanier({img: product.img, name:product.name, price: product.price  })}>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
