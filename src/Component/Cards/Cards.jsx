import { StylesContainer, Card, Image, Source, Title, Description, ReadMore } from "./CardStyle";


const Cards = ({image, sourceName,publishedAt, title, description, url}) => {
    return (
        <StylesContainer>
      
        <Card>
        <Image src={image} width={240} height={150} alt="newspaper article"/> 
        <Source>{sourceName} - {publishedAt}</Source>
        <Title>{title}</Title>
        <Description>{description} 
        <ReadMore href={url} target="_blank" rel="noreferrer">Read More</ReadMore></Description> 
        
        
        </Card>
 </StylesContainer>
    )
}

export default Cards;