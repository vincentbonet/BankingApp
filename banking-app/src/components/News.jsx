import React, { useState, useEffect } from 'react';
import './News.css' 

const News = () => {
    const [articles, setArticles] = useState([]); 

    useEffect(() => {
        
        const fetch = async () => {
            try {
                const apiKey = 'BLAHBLAHBLAH'; 
                const response = await fetch(`to/be/implemented/${apiKey}`); 
                const data = await response.json(); 
            } catch (error) {
                console.error(error);
            } 
        };

        fetch();
    }, []);

    return (
        <>
            <h1>News</h1>
            <ul>
                {articles.map((article, index) => (
                    <li key={index}>
                        <a href={article.url}>{article.title}</a>
                    </li>
                ))}
            </ul>
        </>
    );
};
// update return function with more complex formatting
export default News;