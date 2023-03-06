import React, { useState } from 'react';
import LeftSideBar from './LeftSideBar';
import FilteredBlog from './FilteredBlog';

function App() {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    }

    return (
        <div>
            <LeftSideBar onCategoryClick={handleCategoryClick} />
            <FilteredBlog category={selectedCategory} />
        </div>
    );
}

export default App;