import Styled, { keyframes } from 'styled-components';

import { Link as LinkR } from 'react-router-dom';
export const Formcontainer = Styled.div`
background: #212121;
h3{
  text-align: center;
}
`;
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

background-image: radial-gradient(#42424280, #191919d9),  url(${(props) =>
  props.bgImage});
background-position: center; /* Center the image */
background-repeat: no-repeat; /* Do not repeat the image */
background-size: cover;
display: flex;  
flex-direction: column;
justify-content: flex-end;
align-items: center;

margin: 0;
padding: 0;

width: 100%;
position: relative;
height: 50vh;

z-index: 1;
@media screen and (max-width: 768px) {
    background: transparent  no-repeat center center url(${(props) =>
      props.bgImage});
    
}

`;
export const Card = Styled.div`
// box-shadow: 6px 4px 8px 2px rgb(0 0 0 / 20%);
&hover: {
    box-shadow: 6px 4px 8px 2px rgb(0 0 0 / 70%);
}
h4{
    text-align: center;
}
:hover{
    h4{
        color: #00e700;

    }
}
h2{
  font-weight: 400;
  font-size: 3rem;

}

`;

export const FormButton = Styled.div`







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
    


`;
export const ContainerMain = Styled.div`

display: flex;
flex-direction: column;
h1{
    
        :first-child{
            color: #00e700;
        }
         @media screen and (max-width: 1366px) {
             
         }
   
    line-height: 5rem;
    @media screen and (max-width: 1366px) {
        line-height: 3rem;
    }
}
h2{
  font-size: 3rem !important;
  font-weight: 300 !important;
  width: 83.333333%;
  padding: 0;
  color: #fff;
line-height: 1;
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
BACKGROUND: #191919;
padding: 0px 20px 0px 20px;
z-index: 2;
margin-left: -30vw;

justify-content: flex-end
width:400PX;
height:100%;
flex-wrap: wrap;
display: flex;

flex-direction: column;

align-items: flex-end;


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
    font-size: 1.5rem;
    font-weight: bold;
    line-height:2rem;
    color: #fff;
    margin: 0px;
    width:80%;
    // padding-left:1rem;
    
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
export const HeroP = Styled.div`
margin-top: 24px;
margin-bottom: 24px;
font-family: sans-serif;
font-style: normal;
font-weight: 800;
font-size: 12px;
font-size: 4vw;
line-height: 89.69%;
text-align: left;
width: 100%;
z-index: 2;
color: #FFFFFF;

@media screen and (max-width: 768px) {
    font-size: 24px;
    width: 65%;
    padding: 0px 0px 50px 0px;
    text-align: center; 
}
/* @media screen and (max-width: 1024px) {
    font-size: 20px;
    width: 36%;
    text-align: center; 
} */
@media screen and (max-width: 375px) {
    font-size: 22px;
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
export const Callinfo = Styled.div`
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
export const WWOCCButtonM = Styled(LinkR)`
display: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #01e600;
    color: #010606;
  }
  @media screen and (max-width: 768px) {
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
  margin-top: 44px;
}
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
export const AboutContainer = Styled.div`
  background: #fff;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0px 0px 10px 0px;

  justify-content: center;
  min-height: 100vh;
  animation: fadein 0.5s;

  height: auto;
  h1 {
    margin: 0rem !important;
    margin-top: 2rem !important;
    font-weight: 200;
    div {
      background: #00e700;
      width: 10%;
      transition: all 0.5s ease;
    }
    :hover {
      cursor: pointer;
      div {
        width: 100%;
      }
    }
  }`;
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
