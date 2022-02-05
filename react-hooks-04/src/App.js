import React, { useState, useEffect } from 'react';
import PostList from './components/PostList';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    //effect
    async function fecthPostList() {
      try {
        const requestUrl = "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";

        const response = await axios.get(requestUrl);
        const responseJSON = await response.data;

        const { data } = responseJSON;
        setData(data);

      } catch (error) {
        console.log('Error');
      }
    }

    fecthPostList();

  }, [])

  return (
    <div>
      <PostList post={data} />
    </div>
  );
}

export default App;
