import styled from 'styled-components';
import logo from  '../../img/logo.png'
import DateAndTime from '../DateAndTime/DateAndTime';
import TheWeather from '../Weather/Weather';

const Image = styled.img `
position: absolute;
top: 15px;
left: 15px;
width: 20px;
height: 45px;
`


const Header = () => {
    return (
        <div>
           <Image src={logo} alt="todays time logo"/>
           <TheWeather/>
           <DateAndTime/>
        </div>
    )
}

export default Header;