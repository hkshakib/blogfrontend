import React, { useState, useEffect } from 'react';
import { MdCategory, MdOutlineCategory } from "react-icons/md";
import Classes from '../styles/LeftSideBar.module.css';

const LeftSideBar = () => {
    const [category, setCategory] = useState(null);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await fetch("http://127.0.0.1:8000/category");
            const data = await res.json();
            setCategory(data);
        };

        fetchApi();

    }, []);


    return (
        <div className={Classes.LeftSideBar}>
            <div className={`${Classes.CategoryName} ${Classes.active}`}> <MdCategory className={Classes.Icon}/> All Category</div>
            {category?.map((categorys) => {
                return (
                    <div>
                        <div className={Classes.CategoryName}> <MdOutlineCategory className={Classes.Icon}/> {categorys.name} </div>
                    </div>
                )
            })}
        </div>
    )
};

export default LeftSideBar;