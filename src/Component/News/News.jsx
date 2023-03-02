import styled from 'styled-components';
import { useState, useEffect } from "react";
import TheSearch from '../Search/Search';
import Cards from "../Cards/Cards";
import { StylesContainer } from './NewStyles';

const NewsArticles = () => {
    const [title, setTitle] = useState([]);
    const [error, setError] = useState(null);


    async function SearchArticleTitle(title) {
        fetch(`https://newsdata.io/api/1/news?apikey=pub_180314cf06dbf0c25272a735ee448d85eac38&language=en&country=us&q=${title}`)
        .then((res) => res.json())
        .then((data) => {
            setTitle(data.results)
            console.log(data.results)});
    };

   


    return (
        <div>
    <TheSearch SearchArticleTitle={SearchArticleTitle}/>
       <StylesContainer>
       {title.map((articles, index) => (
       <Cards key={index} title={[articles.title]} description={[articles.description]} url={[articles.url]} publishedAt={[articles.pubDate]} sourceName={[articles.creator]}
       image={articles.image_url}
/>
      ))}
      </StylesContainer>
        </div>
    )
}



export default NewsArticles;