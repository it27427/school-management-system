import HeroThumb from '@/assets/images/hero/hero.png';
import Button from './Button';

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center text-center min-h-screen'>
      <div className='flex flex-col items-center justify-center text-center gap-5 lg:py-12'>
        <div className='flex flex-col items-center justify-center text-center gap-4'>
          <h1 className='text-slate-800 font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
            Free Online School <br /> Management Software.
          </h1>
          <p className='text-sm text-black lg:max-w-[460px]'>
            Now you can manage your school, college, or any educational center
            with eSkooly. It's 100% free for a lifetime with no limitations.
          </p>
        </div>

        <Button classes='btn btn-info'>Admin Register</Button>
      </div>

      <figure>
        <img
          className='h-auto max-w-full object-cover'
          src={HeroThumb}
          alt='HERO-IMAGE'
        />
      </figure>
    </section>
  );
};

export default Hero;
