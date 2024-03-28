import { Link } from 'react-router-dom';
import Image from '../assets/images/NotFound/NotFound.png';
import Button from '../components/common/Button';
import useScrollToTop from '../hooks/useScrollTop';
function NotFound() {
  useScrollToTop();
  return (
    <div className='flex justify-center items-center px-20 py-20'>
      <div className='flex flex-col justify-center items-center gap-2 w-[60%] text-textW px-10 py-10 rounded-3xl bg-bg'>
        <img className='w-[50%] object-cover' src={Image} alt="" />
        <h1 className='text-[3.125rem] font-semibold'>This page could not be found</h1>
        <p className='text-[1.25rem] mb-7'>Oops! The page you are looking for does not exist.</p>
        <Link to='/'>
          <Button style='tertiary'>Go back to home</Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
