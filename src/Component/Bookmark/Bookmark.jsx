import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
        return (
            <div className='bg-slate-300 p-2 lg:p-4 m-2 lg:m-4 rounded-xl'>
                <h3 className='text-xl'>{title}</h3>
            </div>
        )
    }


Bookmark.propTypes = {
    bookmark: PropTypes.object,
};

export default Bookmark;