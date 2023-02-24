import React from 'react';
import Classes from '../styles/Navbar.module.css';

const Navbar = () => {

    // const [category, setCategory] = useState(null);

    // useEffect(() => {
    //     const fetchApi = async () => {
    //         const res = await fetch("http://127.0.0.1:8000/category");
    //         const data = await res.json();
    //         setCategory(data);
    //     };

    //     fetchApi();

    // }, []);

    return (
        <div className={Classes.FixedNavbar}>
            <div className={Classes.navbar}>
                <nav>
                    <div className={Classes.PrimaryClasses}>
                        <a className={Classes.active} href="#">Bookmarks</a>
                        <a href='#'>Request a blog</a>
                    </div>
                    <div className={Classes.MainClass}>
                        <span className={Classes.HomeIcon}>MINIMALISTIC</span>
                    </div>
                    <div className={Classes.AuthClasses}>
                        <div className={Classes.SignUp}> <a href='#'> Beacme A Writer </a> </div>
                        <div className={Classes.Login}> <a href='#'> Login </a> </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;