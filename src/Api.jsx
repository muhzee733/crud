import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Button from '@mui/material/Button';

const Api = () => {
  const [data, myData] = useState([]);
  const Api = "http://localhost:8000";
  // useEffect(() => {
  //     axios.get("http://localhost:8000/posts")
  //     .then((res) =>
  //       myData(res.data)
  //     )
  //     .catch((error)=>(
  //       console.log("hello", error)
  //     ))
  // }, [])

  const getapiData = async (url) => {
    try {
      const res = await axios.get(url)
        .then((res) => myData(res.data));
    } catch (error) {
      console.log("hello", error)
    }
  };

  useEffect(() => {
    getapiData(`${Api}/posts`);
  }, []);

  return (
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
        <Button>Hello</Button>
      </ul>
  );
};

export default Api;
