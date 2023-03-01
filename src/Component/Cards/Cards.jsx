import styled from 'styled-components';

const StylesContainer = styled.div`
position: relative;
top: 250px;
margin: 10px;
 `

const Card = styled.div`
background-color: #232C2B;
height: 550px;
width: 310px;

border: 1px #C5B1AD solid`

 const Image = styled.img `
 color: white;
 padding-left: 30px;
 padding-right: 30px;
 padding-top: 30px;
 padding-bottom: 10px; 
 `  

const Source = styled.div `
color: white;
font-size: 10px;
margin-left: 30px;`

const Title = styled.h2 `
color: #C5B1AD;
font-size: 20px;
margin-left: 30px;
margin-right: 30px;
margin-top: 30px; 
font-family: Inria Serif;
font-weight: 100;
`

const Description = styled.p`
color: white;
font-size: 15px;
margin-left: 30px;
margin-right: 30px;
font-family: Inria Serif;
font-weight: 100;` 

const ReadMore = styled.a`
color: white;
font-size: 10px;
&:link {
    color: white;
  
  }&:hover{
    color: #C5B1AD;
  } 
` 
const Cards = ({image, sourceName,publishedAt, title, description, url}) => {
    return (
        <StylesContainer>
      
        <Card>
        <Image src={image} width={240} height={150} alt="newspaper article"/> 
        
        <Source>{sourceName} - {publishedAt}</Source>
        <Title>{title}</Title>
        <Description>{description} <ReadMore href={url} target="_blank" rel="noreferrer"> Read More</ReadMore></Description> 
        
        
        </Card>
 </StylesContainer>
    )
}

export default Cards;