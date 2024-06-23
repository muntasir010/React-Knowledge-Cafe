import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const {id, title, cover, author_img, author, reading_time, posted_date, hashtag } = blog;
    return (
        <div className='mb-10 md:mb-20 space-y-4'>
            <img className='w-full ' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <img className='w-14 h-14 rounded-full border-4 p-1' src={author_img} alt="" />
                    <div>
                        <h3 className='text-xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <div className='ml-14 space-y-4'>
                <h2 className="text-2xl md:text-3xl font-semibold hover:underline ">{title}</h2>
                <p className='hover:underline hover:text-blue-800 gap-2 flex'>
                    {
                        hashtag.map((hash, idx) => <span key={idx}><a href="">{hash}</a> </span>)
                    }
                </p>
                <button
                    onClick={() => handleMarkAsRead(id, reading_time)}
                    className='text-purple-800 font-bold underline'>Mark As Read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.number
}

export default Blog;