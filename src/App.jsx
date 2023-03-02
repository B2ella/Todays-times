import Preloader from './Component/Preloader/Preloader'
import { StylesContainer, Heading, Container } from './AppStyles';
import Header from './Component/Header/Header';
import TheSearch from './Component/Search/Search';
import NewsArticles from './Component/News/News';



function App() {


  return (


    <StylesContainer>
     <Preloader/>
     <Header/>
    <Heading>Todays<br/> Time</Heading>
    
    <Container>
   <TheSearch/>
   <NewsArticles/>
    </Container> 
    
    </StylesContainer>
    
  )
}

export default App
