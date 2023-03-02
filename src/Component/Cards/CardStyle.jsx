import styled from 'styled-components';

export const StylesContainer = styled.div`
position: relative;
top: 250px;
margin: 10px;
 `

export const Card = styled.div`
background-color: #232C2B;
min-height: 70vh;
width: 22vw;

border: 1px #C5B1AD solid`

export const Image = styled.img `
 color: white;
 padding-left: 30px;
 padding-right: 30px;
 padding-top: 30px;
 padding-bottom: 10px; 
 `  

export const Source = styled.div `
color: white;
font-size: 0.6rem;
margin-left: 30px;`

export const Title = styled.h2 `
color: #C5B1AD;
font-size: 1.4rem;
padding-bottom: 10px;
margin-left: 30px;
margin-right: 30px;
margin-top: 30px; 
font-family: Inria Serif;
font-weight: 100;
`

export const Description = styled.p`
color: white;
font-size: 0.9rem;
margin-left: 30px;
margin-right: 30px;
font-family: Inria Serif;
font-weight: 100;` 

export const ReadMore = styled.a`
color: white;
font-size: 0.9rem;
position: absolute;
bottom: 25px;
right: 25px;
padding-top: 10px;
&:link {
    color: white;
  }&:hover{
    color: #C5B1AD;
  } 
` 

