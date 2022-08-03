import React, { Component } from 'react';
import axios from 'axios';
import ContentLoader, { List } from 'react-content-loader';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

// const MyLoader = props => (
//   <ContentLoader
//     speed={6}
//     width={340}
//     height={84}
//     viewBox="0 0 340 84"
//     backgroundColor="#9f4141"
//     foregroundColor="#37406d"
//     {...props}
//   >
//     <rect x="0" y="0" rx="3" ry="3" width="67" height="11" />
//     <rect x="76" y="0" rx="3" ry="3" width="140" height="11" />
//     <rect x="18" y="23" rx="3" ry="3" width="140" height="11" />
//     <rect x="166" y="25" rx="3" ry="3" width="147" height="9" />
//     <rect x="79" y="81" rx="0" ry="0" width="1" height="0" />
//     <rect x="72" y="50" rx="3" ry="3" width="140" height="11" />
//     <rect x="-7" y="50" rx="3" ry="3" width="67" height="11" />
//     <rect x="298" y="42" rx="3" ry="3" width="41" height="7" />
//     <rect x="298" y="13" rx="3" ry="3" width="41" height="7" />
//   </ContentLoader>
// );

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

class Axios extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const response = await axios.get('/search?query=react');
      this.setState({ articles: response.data.hits });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <div>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {articles.length > 0 && <ArticleList articles={articles} />}
      </div>
    );
  }
}

export default Axios;
