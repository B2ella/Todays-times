import Preloader from './Component/Preloader/Preloader'
import styled from 'styled-components';
import Header from './Component/Header/Header';


const StylesContainer = styled.div`
  background-color: #232C2B;
        height: 100vh;
        width: 100vw;`

function App() {


  return (
    <StylesContainer>
    
    <Preloader/>
    <Header/>
    
    </StylesContainer>
  )
}

export default App
