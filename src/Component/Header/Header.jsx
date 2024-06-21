import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between my-6 items-center border-b py-2'>
            <h1 className='text-2xl md:text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;