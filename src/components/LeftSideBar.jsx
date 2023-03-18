import React, { useState, useEffect } from 'react';
import { MdCategory, MdOutlineCategory } from "react-icons/md";
import Classes from '../styles/LeftSideBar.module.css';

const LeftSideBar = (props) => {
    const [category, setCategory] = useState(null);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch("http://127.0.0.1:8000/category");
            const data = await res.json();
            setCategory(data);
        };
        const Category = ["Story", "Music", "Technology", "Poem", "Novel", "Information", "Child", "People"];
        // fetchApi();
        setCategory(Category);

    }, []);

    const handleCategoryClick = (category) => {
        props.onCategoryClick(category);
    }



    return (
        <div className={Classes.LeftSideBar} >
            <div className={`${Classes.CategoryName} ${Classes.active} ${Classes.TopCat}`}> <MdCategory className={Classes.Icon} /> All Category</div>
            {category?.map((categorys) => {
                return (
                    <div key={categorys.id}>
                        <div className={Classes.CategoryName} onClick={() => handleCategoryClick(categorys)} >
                            <MdOutlineCategory className={Classes.Icon} />{categorys}
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default LeftSideBar;