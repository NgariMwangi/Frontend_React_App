export default function Features({h3,}) {
  return (
  <div className="bg-gray-200 px-2 py-20 sm:py-20">

  <div id="features" className="mx-auto max-w-6xl">
    {/* <p className="text-center text-base font-semibold leading-7 text-primary-500">Features</p> */}
    <h2 className="text-center font-display  font-bold tracking-tight   text-[#FFCC00] " style={{fontSize:"40px"}}>
    Navigate Your Coding Journey:<br></br> Key Features of Our Programming Tutor Portal
    </h2>
    <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
    <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
       
          <img src="https://www.svgrepo.com/show/530440/machine-vision.svg" alt="" className="mx-auto h-10 w-10"/>
          <h3 className="my-3 font-display font-medium group-hover:text-primary-400 text-[#FFCC00] font-extrabold">Interactive Coding Environment</h3>
          <p className="mt-1.5 text-sm leading-6 text-secondary-500">A feature that allows learners to write, test, and debug code directly within the website. This could include an integrated code editor with syntax highlighting, auto-completion, and debugging tools.</p>
        
      </li>
      <li className="rounded-xl bg-white px-6 py-8 shadow-sm">

        <img src="https://www.svgrepo.com/show/530438/ddos-protection.svg" alt="" className="mx-auto h-10 w-10"/>
        <h3 className="my-3 font-display font-medium text-[#FFCC00] font-extrabold">Live Coding Sessions</h3>
        <p className="mt-1.5 text-sm leading-6 text-secondary-500">
        We have real-time coding sessions with tutors or mentors. This could include screen sharing, video conferencing, and collaborative coding tools to facilitate interactive learning experiences.
        </p>

      </li>
      <li className="rounded-xl bg-white px-6 py-8 shadow-sm">

        <img src="https://www.svgrepo.com/show/530442/port-detection.svg"
                alt="" className="mx-auto h-10 w-10"/>
        <h3 className="my-3 font-display font-medium text-[#FFCC00] font-extrabold">Project-based Learning</h3>
        <p className="mt-1.5 text-sm leading-6 text-secondary-500">
        Integration of project-based learning experiences where learners can work on real-world projects, apply their skills, and build a portfolio of work to showcase their abilities to potential employers.
        </p>

      </li>
      <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
        <img src="https://www.svgrepo.com/show/530444/availability.svg" alt="" className="mx-auto h-10 w-10"/>
        <h3 className="my-3 font-display font-medium text-[#FFCC00] font-extrabold">Live Coding Sessions</h3>
        <p className="mt-1.5 text-sm leading-6 text-secondary-500">
        A feature that enables real-time coding sessions with tutors or mentors. This could include screen sharing, video conferencing, and collaborative coding tools to facilitate interactive learning experiences.
        </p>

      </li>
      <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
        
          <img src="https://www.svgrepo.com/show/530453/mail-reception.svg" alt="" className="mx-auto h-10 w-10"/>
          <h3 className="my-3 font-display font-medium group-hover:text-primary-500 text-[#FFCC00] font-extrabold">Code Review and Feedback</h3>
          <p className="mt-1.5 text-sm leading-6 text-secondary-500">A forum or discussion board where learners can ask questions, share knowledge, and engage in discussions with tutors, mentors, and fellow learners. This could also include a Q&A section for common programming queries.</p>
      
      </li>
      <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
        
          <img src="https://www.svgrepo.com/show/530450/page-analysis.svg" alt="" className="mx-auto h-10 w-10"/>
          <h3 className="my-3 font-display font-medium group-hover:text-primary-500 text-[#FFCC00] font-extrabold">
          Community Forum
          </h3>
          <p className="mt-1.5 text-sm leading-6 text-secondary-500">We offer many templates covering areas such as
            writing,
            education, lifestyle and creativity to inspire your potential. </p>
        
      </li>
  
    </ul>
  </div>

  </div>

    )
}
