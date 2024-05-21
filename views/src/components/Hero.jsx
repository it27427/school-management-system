import HeroThumb from '@/assets/images/hero/hero.png';

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center text-center min-h-screen'>
      <div className='flex flex-col items-center justify-center text-center gap-4'>
        <h1 className='text-slate-800 font-bold text-3xl'>
          School Management System
        </h1>
      </div>

      <figure>
        <img
          class='h-auto max-w-full object-cover'
          src={HeroThumb}
          alt='HERO-IMAGE'
        />
      </figure>
    </section>
  );
};

export default Hero;
