import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/index';
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
    //ProductButton
  } from './ProductsElements';

const Details = ({ name, data }) => {
    return (
        <div>
            <Navbar></Navbar>
            <ProductsContainer>
      <ProductsHeading>{name}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
                <ProductImg src={product.img} alt={product.alt} />

              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>

                <ProductPrice>{product.price}</ProductPrice>
                
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
            <Footer></Footer>
        </div>
    );
};

export default Details;
/*
<ProductButton onClick={() => handlePanier({img: product.img, name:product.name, price: product.price  })}>{product.button}</ProductButton>*/