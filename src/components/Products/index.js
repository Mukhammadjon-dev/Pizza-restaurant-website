import Slider from "react-slick";
import React from "react";
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductCard2,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
  ProductImg2,
} from "./ProductElements";

export const PauseOnHover = ({ data }) => {
  var settings = {
    dots: true,
    draggable: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <ProductsContainer id="PauseOnHover">
      <div>
        <h2 className="text-center"> Your Favourite Sweets</h2>
        <Slider {...settings} >
          {data.map((product, index) => {
            return (
              <div>
                <ProductCard2 key={index}>
                  <ProductImg2 src={product.img} alt={product.alt} />
                  <ProductInfo>
                    <ProductTitle>{product.name}</ProductTitle>
                    <ProductDesc>{product.desc}</ProductDesc>
                    <ProductPrice>{product.price}</ProductPrice>
                    <ProductButton>{product.button}</ProductButton>
                  </ProductInfo>
                </ProductCard2>
              </div>
            );
          })}
        </Slider>
      </div>
    </ProductsContainer>
  );
};

const Products = ({ heading, data }) => {
  return (
    <ProductsContainer id='Products'>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};
export default Products;
