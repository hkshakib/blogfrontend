import React from 'react';
import LeftSideBar from '../components/LeftSideBar';
import RightSideBar from '../components/RightSideBar';
import Content from '../components/Content';
// import SignUp from '../components/SignUp';
import Classes from '../styles/Main.module.css';

const Main = ()=> {
  return (
    <div className={Classes.Main}>
        <LeftSideBar/>
        <Content/>
        <RightSideBar/>
        {/* <SignUp/> */}
    </div>
  )
};

export default Main;