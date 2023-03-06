import React, { useState, useEffect } from 'react';
import { TfiWrite } from "react-icons/tfi";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import Classes from '../styles/RightSideBar.module.css';

const RightSideBar = () => {

  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setAuthor(data);
    };

    fetchApi();

  }, []);


  return (
    <div className={Classes.RightSideBar}>
      <div className={Classes.AuthorList}>
        <span className={Classes.AuthorTitle}><p><TfiWrite /> TOP AUTHOR</p></span>
        {Array.isArray(author) ? author.slice(0,10).map((authors) => {

          return (
            <div className={Classes.AuthorBox} key={authors.name}>
              <span className={Classes.Name} >{authors.name}</span>
            </div>
          )
        }) : null}

      </div>
      <div className={Classes.FeaturedPost}>
        <span className={Classes.AuthorTitle}><p><MdOutlineFeaturedPlayList /> FEATURED POST</p></span>
        {Array.isArray(author) ? author.map((authors) => {
          return (
            <div className={Classes.AuthorBox} key={authors.name}>
              <span className={Classes.Name}>{authors.name}</span>
            </div>
          )
        }) : null}
      </div>
    </div>
  )
};

export default RightSideBar;