import React, { useState, useEffect } from 'react';
import { TfiWrite } from "react-icons/tfi";
import Classes from '../styles/RightSideBar.module.css';

const RightSideBar = () => {

  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch("https://anapioficeandfire.com/api/houses");
      const data = await res.json();
      setAuthor(data);
    };

    fetchApi();

  }, []);

  return (
    <div className={Classes.RightSideBar}>
      <div className={Classes.AuthorList}>
        <span className={Classes.AuthorTitle}><p><TfiWrite/> TOP AUTHOR</p></span>
        {Array.isArray(author) ? author.map((authors) => {
          return (
            <div className={Classes.AuthorBox} key={authors.id}>
              <span className={Classes.Name} key={authors.id}>{authors.name}</span>
            </div>
          )
        }) : null}

      </div>
      <div className={Classes.FeaturedPost}>
        <span className={Classes.AuthorTitle}><p>FEATURED POST</p></span>
        {Array.isArray(author) ? author.map((authors) => {
          return (
            <div className={Classes.AuthorBox} key={authors.id}>
              <span className={Classes.Name} key={authors.id}>{authors.name}</span>
            </div>
          )
        }) : null}
      </div>
    </div>
  )
};

export default RightSideBar;