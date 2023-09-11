import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({ blog, HandelAddToBookMark }) => {
    // console.log(blog)
    const { cover_img, title, host_img, host_name, published_date, time } = blog
    return (
        <div className="my-10">
            <img src={cover_img} alt="" />
            <div>
                <img className=' w-full' src={host_img} alt="" />
                <div className="flex justify-between items-center">
                    <div>
                        <p>{host_name}</p>
                        <p><span className="text-xs">{published_date}</span></p>
                    </div>
                    <div className='flex items-center'>
                        <span className="text-xs ">{time}min read</span>
                        <button onClick={() => HandelAddToBookMark(blog)} className='text-xl text-red-600'><FaBookmark></FaBookmark></button>
                    </div>
                </div>
                <h2 className="text-3xl font-semibold">{title}</h2>
            </div>
            <button className="text-violet-700 underline">Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;