import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LawNews.css';

const LawNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
            params: {
              q: '"Indian law" OR judiciary OR "Supreme Court" OR "High Court" OR "legal reform" OR "Indian Penal Code" OR "constitutional law" OR "legal judgment"',
              language: 'en',
              sortBy: 'relevancy', // better than publishedAt
              pageSize: 20,
              apiKey: 'baa4e60ac1654a2f8946ac67062007e4'
            }
          });          
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading news...</p>;

  return (
    <div className="news-container">
      <h2>📰 Indian Law News</h2>
      <div className="grid">
        {articles.map((article, index) => (
          <div key={index} className="news-card">
            {article.urlToImage && (
              <img src={article.urlToImage} alt="Article" className="news-image" />
            )}
            <div className="news-content">
              <h3>{article.title}</h3>
              <p className="news-date">
                {new Date(article.publishedAt).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
              <p>{article.description || 'No description available.'}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                Read Full Article →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LawNews;
