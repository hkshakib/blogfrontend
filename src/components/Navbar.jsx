import React, { useEffect, useState } from 'react';
import Classes from '../styles/Navbar.module.css';

const Navbar = () => {

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
        <div className={Classes.FixedNavbar}>
            <div className={Classes.navbar}>
                <nav>
                    <a className={Classes.active} href="#">Home</a>
                    {category?.map((categorys) => {
                        return (
                            <div>
                                <a href='#'>{categorys.name}</a>
                            </div>
                        )
                    })}
                    <div className={Classes.SignUp}>Beacme A Writer</div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;