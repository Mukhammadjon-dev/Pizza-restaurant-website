import styled from "styled-components";
import ImgBg from "../../images/fastfood.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
export const HeroContent = styled.div`
  
`;
export const HeroItems = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 10rem 2rem;
width: 70%;
color: #fff;
text-transform: uppercase;
line-height: 1;
font-weight: bold;

@media screen and (max-width: 950px){
    width: 100%;
}
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
  color: white;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
  color: white;
`;
export const HeroBtn = styled.button`
font-size: 1.6rem;
padding: 1rem 4rem;
border: none;
background: #e31837;
color: #fff;
transition: 0.2s ease-out;

&:hover{
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color; #000;
}
`;
