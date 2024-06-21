import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks,readingTime }) => {
    return (
        <div className="md:w-1/3 mb-5 md:mb-10 bg-gray-200 md:ml-4 p-2 lg:p-4 rounded-2xl">
            <div className='text-center font-semibold my-3 p-2 rounded-xl bg-blue-300 '>
                <h3 className="text-4xl">Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-xl md:text-3xl font-semibold text-center">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;