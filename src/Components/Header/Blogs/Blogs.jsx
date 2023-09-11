
import { useState } from "react";
import Blog from "../../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ HandelAddToBookMark }) => {
    const [blogs, setBlogs] = useState([]);
    useState(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])



    return (
        <div className="w-2/3 border-2">
            <h2 className="text-2xl mt-4 font-medium">Blogs Available: {blogs.length}</h2>
            <div>
                {
                    blogs.map(blog => <Blog blog={blog} key={blog.id}
                        HandelAddToBookMark={HandelAddToBookMark}></Blog>)
                }
            </div>
        </div>
    );
};

Blogs.propTypes = {
    HandelAddToBookMark: PropTypes.func
}

export default Blogs;