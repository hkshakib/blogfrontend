import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import Pagination from '../components/Pagination';
import Classes from '../styles/Content.module.css';


const Content = () => {

    const [post, setPost] = useState(null);


    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setPost(data);
        };

        fetchApi();

    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(75);
    const [totalItems] = useState(100);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentItems = post.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    console.log(typeof (post));

    const stringReducer = (data, amount) => {
        let string = data.split(/<\/?\w*>/);
        string = string.reduce((data, one) => data += one);
        string = string.substr(0, amount);
        return string;
    }

    const HandleOnClick = (post_id) => {
        
    }

    return (
        <>
            <div className={Classes.Container}>
                {post?.slice(indexOfFirstItem, indexOfLastItem).map((posts) => {
                    return (
                        <div className={Classes.PostBox} key={posts.id} >
                            <span className={Classes.title} >{stringReducer(posts.title, 30)}</span>
                            <span className={Classes.content}>{stringReducer(posts.body, 50)} . . .</span>
                            {/* <button onClick={() => { HandleOnClick(posts.id) }}>READ</button> */}
                            <button onClick={() => { HandleOnClick(posts.id) }}> <Link to={`/post_details/${posts.id}`}>READ</Link></button>
                        </div>
                    )
                })}
            </div>
            {/* <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(totalItems / itemsPerPage)}
                onPageChange={handlePageChange}
            /> */}
        </>

    );
}

export default Content;