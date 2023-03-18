import { Route, Routes } from "react-router-dom"
import '../styles/App.css';
import Blog from '../components/Blog';
import PostPage from '../components/PostPage';

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" exact element={<Blog />} />
        <Route path="/post_details/:id" element={<PostPage/>} />
      </Routes>
    </div>
  );
}

export default App;
