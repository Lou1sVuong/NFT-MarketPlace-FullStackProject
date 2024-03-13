import Image from '../../assets/images/homePage/Subcribe/Image.svg';
import Subscribe from '../common/Subscribe';
function SubscribeWidget() {
  return (
    <div className='py-20 px-40 text-textW'>
      <div className='flex justify-center items-center gap-20 w-full bg-bgsecondary rounded-3xl p-[3.75rem]'>
        <img src={Image} alt="Astronaut" />
        <div>
            <h3 className='text-[2.375rem] font-semibold w-[20rem] mb-3'>Join Our Weekly Digest</h3>
            <p  className='text-[1.375rem] font-normal w-[25rem] mb-8'>Get exclusive promotions & updates straight to your inbox.</p>
            <Subscribe />
        </div>
      </div>
    </div>
  )
}

export default SubscribeWidget
