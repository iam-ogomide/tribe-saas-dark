import helix from '../assets/images/helix2.png';
import emoji from '../assets/images/emojistar.png';
import Image from 'next/image';

export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:p-24 text-center">
      <div className="container max-w-xl relative">
        <Image src={helix} className='absolute top-6 left-[calc(100%+36px)]'/>
        <Image src={emoji} className='absolute -top-[120px] right-[calc(100%+24px)]'/>
        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">Get Instant Access</h2>
        <p className="text-xl text-white/70 mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam debitis vel numquam distinctio error iste!</p>

        <form action="" className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input type="email" placeholder="your@email.com" className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"/>
          <button className="bg-white text-black h-12 rounded-lg px-5">Get Access</button>
        </form>
      </div>
    </div>
  );
};
