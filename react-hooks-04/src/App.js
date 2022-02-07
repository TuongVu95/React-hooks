import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './components/PostList';
import ShowUser from './components/ShowUser';

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count+1)
  },[count])

  function handleClickCount(){
    setCount(count+1) ;
  }

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

  useEffect(() => {
    function callAPIUser() {
      try {
        const baseURL = "https://5df8a4c6e9f79e0014b6a587.mockapi.io/freetuts/users";

        axios.get(baseURL)
          .then((res) => {

              const {data} = res;
              setUser(data);

          })
      } catch (error) {
        console.log(error);
      }
    }

    callAPIUser();
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
    <button onClick={()=>{handleClickCount()}}>Click Count</button>
      <PostList post={data} />

      <ShowUser user={user}/>
    </div>
  );
}

export default App;
