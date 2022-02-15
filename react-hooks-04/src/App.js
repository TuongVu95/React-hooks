import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import PostList from './components/PostList';
import ShowUser from './components/ShowUser';
import UseContent from './components/UseContent';
import Pagination from './components/Pagination';

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [count, setCount] = useState(0);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _total: 11
  })

  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1
  });

  const originURL = window.location.href;

  // const usePathname = () => {
  //   const location = useLocation();
  //   console.log("location", location);
  // }
  // usePathname();

  function handleClickCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    //effect
    async function fecthPostList() {
      try {
        const paramsString = queryString.stringify(filter);
        console.log("paramsString", paramsString)
        const requestBaseURL = `${originURL}?${paramsString}`;
        console.log("requestBaseURL", requestBaseURL);

        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;

        const response = await axios.get(requestUrl);
        const responseJSON = await response.data;

        const { data, pagination } = responseJSON;

        setData(data);
        setPagination(pagination);

      } catch (error) {
        console.log('Error');
      }
    }

    fecthPostList();
  }, [filter])

  useEffect(() => {
    function callAPIUser() {
      try {
        const baseURL = "https://5df8a4c6e9f79e0014b6a587.mockapi.io/freetuts/users";

        axios.get(baseURL)
          .then((res) => {

            const { data } = res;
            setUser(data);

          })
      } catch (error) {
        console.log(error);
      }
    }

    callAPIUser();
  }, [])

  const handleChangePagination = (params) => {
    console.log("params", params)
    setFilter({
      ...filter,
      _page: params
    })
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => { handleClickCount() }}>Click Count</button>
      <PostList post={data} />

      <ShowUser user={user} />

      <UseContent value='Có một không hai!' />

      <Pagination pagination={pagination} handleOnchangePages={handleChangePagination} />
    </div>
  );
}

export default App;
