import Router from 'next/router'

export default () => {
  return (
    <div className='mt-16 font-Inter'>
      <h1 className="font-Inter font-black text-5xl md:text-7xl leading-[3.4rem] text-center mb-2 md:mb-5">Don't forget them</h1>
      <h1 className="font-Inter font-black text-5xl md:text-7xl text-center text-primary mb-16">Birthdays</h1>

      <h3 className="text-base md:text-lg text-center text-fadedColor mb-16">Manage birthdays of your friends and family like ezpzlemonsqez</h3>

      <div className="flex justify-center items-center gap-4 w-full flex-wrap">
        <button onClick={() => Router.push('/register')}
          className="bg-primary md:py-[0.9rem] py-4 px-14 text-center text-white w-3/4 md:w-auto md:text-base font-medium rounded-md hover:bg-opacity-90">Get Started</button>
        <button onClick={() => Router.push('/register')}
          className="bg-black md:py-[0.9rem] py-4 px-14 text-center text-white w-3/4 md:w-auto md:text-base font-medium rounded-md hover:bg-opacity-80">Learn More</button>
      </div>
    </div>
  )
}
