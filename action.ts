import axios from "axios";

import React from 'react'

const getPosts = async() => {
    let res = await axios.get("http://localhost/8080/posts") 
  return res;
   
}

export default getPosts;
