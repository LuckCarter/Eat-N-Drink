import styled from 'styled-components';

export const ProductsContainer = styled.div`
  background: black;
  color: #fff;
  padding: 1rem 0rem;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-rigth:10%;
  margin-left:10%;
`;

export const ProductCard = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  margin:1rem
`;

export const ProductImg = styled.img`
  height: 125px;
  min-width: 125px;
  margin-top:10%;
  max-width: 100%;
  box-shadow: 8px 8px #db80ff;
`;

export const ProductsHeading = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  padding: 1rem;
  color:#db80ff;
  text-transform:uppercase;
  border-top:2px #fff;
`;

export const ProductTitle = styled.h2`
  font-size: 1.5rem;
  margin:10px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width:250px;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
  width:200px;
`;

export const ProductPrice = styled.p`
  font-size: 1.5rem;
  margin:0;
`;

export const ProductButton = styled.button`
color:white;
background: linear-gradient(-75deg,#db80ff,#ca45ff,#716fff,#43baff,#43f2ff);
width: 200px;
height: 40px;
font-size: 20px;
border-radius: 20px;
border: none;
`;
