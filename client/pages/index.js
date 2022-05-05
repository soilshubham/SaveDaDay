import Router from 'next/router'

export default () => {
  return (
    <div className="bg-white min-h-screen pt-14 md:pt-3 md:pb-24 relative">
      <div className="container p-4 lg:max-w-5xl md:max-w-2xl">
        <div className='mt-16 font-manrope'>
          <h1 className="font-Inter font-extrabold text-6xl md:text-6xl  text-center mb-2 md:mb-5">Don't forget them</h1>
          <h1 className="font-Inter font-extrabold text-6xl md:text-6xl text-center text-primary mb-16">Birthdays</h1>

          <h3 className="text-base md:text-lg text-center text-black mb-16">Manage birthdays of your friends and family like a boss!</h3>

          <div className="flex justify-center items-center gap-6 w-full flex-wrap">
            <button onClick={() => Router.push('/register')}
              className="bg-primary md:py-[0.9rem] py-6 px-10 text-center text-white w-3/4 md:w-auto md:text-base font-medium rounded-md hover:scale-105 transition-all">Get Started</button>
            <button onClick={() => Router.push('/register')}
              className="bg-black md:py-[0.9rem] py-6 px-10 text-center text-white w-3/4 md:w-auto md:text-base font-medium rounded-md hover:scale-105 transition-all">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}
