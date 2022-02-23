import Styled, { keyframes } from 'styled-components';
import bgimage from '../../images/KalPwer.png';
import { Link as LinkR } from 'react-router-dom';

const heartbeat = keyframes`


  0%
  {
    transform: scale( .75 );
  }
  20%
  {
    transform: scale( 1 );
  }
  40%
  {
    transform: scale( .75 );
  }
  60%
  {
    transform: scale( 1 );
  }
  80%
  {
    transform: scale( .75 );
  }
  100%
  {
    transform: scale( .75 );
  }


`;

export const HeroContainer = Styled.div`

overflow: hidden;
// background:  url(${bgimage}) center ;
background-image: radial-gradient(#42424280,#9f9e9e17),  url(${bgimage});
background-size: cover;
display: flex;  
flex-direction: column;
j

margin: 0;
padding: 0;

width: 100%;
position: relative;
height: 90vh;

z-index: 1;
@media screen and (max-width: 768px) {
  height: 90vh;
    background: radial-gradient(#42424280,#9f9e9e17), url(${bgimage}) no-repeat center center;
    
}

`;
export const Card = Styled.div`
box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
border-radius: 20px;
img{
    filter: grayscale(100%);
}
h4{

font-style: normal;
font-weight: bold;
    font-size: 1.5rem;
}
`;
export const Head = Styled.div`
h2 {
    text-align: start;
    width: 100%;
    div {
      background: #00e700;
      width: 20%;
      border-radius: 10px;
      transition: all 0.5s ease;
    }
    :hover {
      cursor: pointer;
      div {
        width: 85%;
      }
    }
  }
`;
export const Line = Styled.div`
border-left: 2.5px solid black;
width: 10rem;
height: 100%;
`;
export const Faq = Styled.div`  
padding-top: 2rem;
:hover{
div{
    display: block;
}
}    
:first-child{
    display: block;

}
div{
    display: none;
}
:last-child{
    padding-bottom: 2rem;
}
`;
export const ContainerMain = Styled.div`
display: flex;
flex-direction: column;
h1{
    font-size: 1.5rem;
    font-weight: normal;
    color: #fff;
    letter-spacing: 0.3rem;
}
`;

// export const HeroBg = Styled.div`

// position: absolute;
// z-index: 2;
// top: 0;
// left: 0;
// bottom: 0;
// right: 0;
// overflow: hidden;
// width: 100vw;
// height: 100vh;
// `
export const WWOCardContainer = Styled.div`
display: flex;
flex-wrap: wrap;
align-items: flex-start;
justify-content: center;
padding-bottom: 90px;
`;

export const WWOCArd = Styled.div`
  flex: 0 0 200px;
    margin: 10px;
   
   
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.01);
z-index: 5;
background-color: #FFFFFF;

flex-direction: column;
align-items: center;
transition: 0.3s all ease;
&:hover{
   
    box-shadow: 2px 5px 6px 0px  rgba(0,0,6,0.2);
}
`;

export const WWOCardContent = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 200px;

`;
export const WWOCardimage = Styled.div`
display: flex;

height: 100%;
`;

// export const BgImage = Styled.div`
// width: 100%;
// height: 100%;
// background-image: url(../../images/Bg.png);
// -o-object-fit: cover;
// object-fit: cover;
// // background: #232a34;

// `
// export const HeroBg = Styled.div`

// position: absolute;
//  background-image: url(../../images/bg.png);
// top: 0;
// left: 0;
// bottom: 0;
// right: 0;
// width: 100%;
// height: 100%;

// overflow: hidden;

// `;
// export const BgImage = Styled.div`
// width: 100%;
// height: 100%;
// background-image: url(../../images/bg.png);
// -o-object-fit: cover;
// object-fit: cover;
// // background: #232a34;

// `;
export const FormC = Styled.div`
z-index: 5;
position: relative;
div{
    position: absolute;
    top: 0;
    left: 0;
    
}

`;
export const VideoBg = Styled.video`

width: 100%;

height: 100%;

-o-object-fit: cover;

object-fit: cover;

background: #232a34;
@media screen and (max-width: 768px) {
    display: none;
    
}
`;
export const HeroContent = Styled.div`
padding: 0px 20px 0px 20px;
z-index: 2;
margin-left: 10vw;
flex:1;
width: 100%;

flex-wrap: wrap;
display: flex;
justify-content: space-between;
flex-direction: row;

align-items: center;


div{
    width: 60%;
   
   
   
    @media screen and (max-width: 768px) {
    display: none;
    
    
    }
    @media screen and (min-width: 1024px) {
    display: block;
    align-items: right;
    
    
    }
    @media screen and (max-width: 480px) {
    display: none;
    
    }
 
    
}

    


@media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 0px 0px 0px 0px;
        margin:0px;
        justify-content: center;
    }
@media screen and (max-width: 480px) {
    padding: 100px 0px 0px 0px;
    
    flex-direction: column;
    font-size: 32px;
    align-items: center;
    justify-content: center;
    margin:0px;
}
`;
export const PCENTER = Styled.p`
display: none;
    @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
    text-align: left;
    margin: 2rem;
    padding: 0px;
    h1{
    
        :first-child{
            color: #fff;
            font-weight:bold;
            font-size: 1.5rem;
            letter-spacing: 0.02rem;
            font-family: sans-serif;
        }
         @media screen and (max-width: 1366px) {
             
         }
   
    line-height: 5rem;
    @media screen and (max-width: 1366px) {
        line-height: 3rem;
    }
}
    }

`;
export const HeroH1 = Styled.h1`

font-family: sans-serif;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 42px;
text-align: center;
z-index: 2;
color: #ED1C24;

@media screen and (max-width: 768px) {
    font-size: 40px;
}
@media screen and (max-width: 480px) {
    font-size: 32px;
}
`;
export const HeroP = Styled.h2`
margin-top: 24px;
margin-bottom: 8px;
font-family: sans-serif;
font-style: normal;
font-weight: 600;
font-size: 3rem;

line-height: 89.69%;
text-align: left;
// width: 75%;
z-index: 2;
color: #FFFFFF;

@media screen and (max-width: 768px) {
    font-size: 54px;
    width: 65%;
    padding: 0px 0px 50px 0px;
    text-align: center; 
}
/* @media screen and (max-width: 1024px) {
    font-size: 40px;
    width: 36%;
    text-align: center; 
} */
@media screen and (max-width: 375px) {
    font-size: 42px;
    width: 80%;
  
    text-align: center; 
}
`;
export const CardHeading = Styled.button`

font-family: sans-serif;
font-style: normal;
font-weight: bold;
font-size: 25px;

padding: 25px 80px 25px 0px;
text-align: start;
z-index: 2;
color: #FFFFFF;

@media screen and (max-width: 768px) {
    font-size: 24px;
}
@media screen and (max-width: 480px) {
    font-size: 22px;
}
`;
export const CardPara = Styled.button`

font-family: sans-serif;
font-style: normal;
font-weight: bold;
font-size: 20px;

text-align: center;
z-index: 2;
color: #FFFFFF;

@media screen and (max-width: 768px) {
    font-size: 24px;
}
@media screen and (max-width: 480px) {
    font-size: 22px;
}

`;
export const HeroBtnWrapper = Styled.div`
margin-top: 32px;
display: flex;
z-index: 2;
flex-direction: column;
align-items: center;
`;
export const HeroPromoContainer = Styled.div`
z-index: 10;
display: flex;
flex:0;
justify-content: center;

flex-direction: row;
align-items: center;
padding: 0px 0px 40px 0px;
@media screen and (max-width: 768px) {
    display: none;
}
`;
export const HeroPromo = Styled.div`
margin-top: 32px;
display: flex;
flex:1;
z-index: 2;
flex-direction: row;
align-items: flex-end

`;
export const SocialMediaActions = Styled.div`
display: flex;

padding-right: 20px;

/* padding: 0px 20px 0px 20px; */
right: 0;
top: 0;

font-size: 3rem ; 
cursor: pointer;
color: #94CD01;
&.active{
    color: #2F7DBD;
  }
&:hover{
    color: #2F7DBD;
}
`;
export const HomeContactContent = Styled.div`
margin-top: 32px;
display: flex;
z-index: 2;
flex-direction: column;
align-items: start;
padding: 0px 20px 0px 0px;
`;
export const Callinfo = Styled.p`
font-family: sans-serif;
font-style: normal;
font-weight: bold;
font-size: 15px;

text-align: left;

color: #FFFFFF;

@media screen and (max-width: 768px) {
    font-size: 24px;
}
@media screen and (max-width: 480px) {
    font-size: 22px;
}
`;
export const Info = Styled.div`
font-family: sans-serif;
font-style: normal;
font-weight: bold;
font-size: 15px;

text-align: center;
z-index: 2;
color: #FFFFFF;

@media screen and (max-width: 768px) {
    font-size: 24px;
}
@media screen and (max-width: 480px) {
    font-size: 22px;
}
`;
export const WWOCCButtonM = Styled.div`

width: 15%;
align-items: center;
  background-color: #0064bf;
  border: 2px solid #06f;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  fill: #000;
  font-family: Inter,sans-serif;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  justify-content: center;
  letter-spacing: -.8px;
  line-height: 24px;
  min-width: 140px;
  outline: 0;
  padding: 0 17px;
  text-align: center;
  text-decoration: none;
  transition: all .3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;


:focus {
  color: #171e29;

}

:hover {
  background-color: #3385ff;
  border-color: #3385ff;
  fill: #06f;
  animation: none;
}

:active {
  background-color: #3385ff;
  border-color: #3385ff;
  fill: #06f;
}

@media (min-width: 768px) {
 
    min-width: 170px;
 
}
  animation: ${heartbeat} 6s infinite;
    


  margin-top: 2rem;

`;
export const WWOCCButton = Styled(LinkR)`
padding: 25px;
display: block;
  display: flex;
    justify-content: center;
  background: #01e600;
  padding: 10px 22px;
  white-space: nowrap;
  padding: 20px 92px;
  font-size: 16px;
  color: #fff;
  outline: none;
  border: none;
  
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #01e600;
    color: #010606;
  }
  @media screen and (max-width: 768px) {
    display: none;
}
`;
export const NavLinks = Styled(LinkR)`
color: ${({ scrollNav }) => (scrollNav ? '#fff' : `#000`)};
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active{
    color: #01e600;
  }
&:hover{
    color: #01e600;
  };
&.active {
 border-bottom: 3px solid #15cdfc;
}

`;
