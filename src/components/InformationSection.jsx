import './Navbar.css'
import Button from './Button'
export default function InformationSection(){

    return(
        <div className="relative isolate px-6 pt-14 lg:px-8 ">
        
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="/hero-video.mp4" 
      />
       {/* Dark overlay */}
       <div className="absolute inset-0 bg-black opacity-50 -z-10" />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
       
          <div className="text-center ">
          <div >
          <h1 className="text-4xl font-bold tracking-tight text-[#FFCC00] sm:text-6xl">
          Turbocharge Your Team's Programming Potential!
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#E5E4E2] font-bold" style={{fontSize:"21px"}}>
            Unleash the power of collaborative learning and seamless knowledge sharing. Elevate your programming prowess with our dynamic platform
            </p>
          </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button className="rounded-md bg-[#FFCC00] px-8 py-2.5 text-sm text-black  shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-bold hover:text-white">View Courses</Button>
              
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    )
}