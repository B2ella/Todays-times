import styled from 'styled-components';


const StylesContainer = styled.div`
  background-color: #232C2B;
        height: 100vh;
        width: 100vw;`

const Container = styled.div`
  background: linear-gradient(180deg, #3A3A3C, #6D5B59),linear-gradient(142deg, transparent, #908279),linear-gradient(108deg, #908279, transparent);
  width: 70vw; 
  height: 100vh;
  position: absolute;
  left: 15vw;
  top: 30vh;`

  const Heading = styled.h1`
    font-size: 150px;
    font-family: Helvetica Neue;
    font-weight: 100;
    color: #C5B1AD;
    z-index: 3;
    position: absolute;
    left: 100px;
    top: 5px;
    `  
  
   




const Layout = () => {
    return (
   <StylesContainer>
   
  
     
    <Heading>Todays<br/> Time</Heading>
    
    <Container>
   
   
    </Container> 
    
    </StylesContainer>
    )
}

export default Layout;