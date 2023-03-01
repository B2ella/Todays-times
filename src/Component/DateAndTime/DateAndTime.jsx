import styled from 'styled-components';

const Style = styled.p `
    color: #C5B1AD;
    margin: 0;
    display: grid;
    place-content: center;
    padding: 15px;`



const DateAndTime = () => {

    const today = new Date();
    const time = `${today.getHours()}:${today.getMinutes()}`;

    const current = new Date();
    const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
  
  
    return (
      <div className="date">
      <Style>Time : {time} / Date : {date}</Style>
      </div>
    )
}

export default DateAndTime;



