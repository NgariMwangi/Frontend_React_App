export default function ChooseUs(){


    return(
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" style={{padding:"60px"}}>
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth:"600px"}}>
                <h5 className="fw-bold  text-uppercase text-[#FFCC00]" style={{fontSize:"40px", paddingBottom:"15px"}}>Why Choose Us</h5>
                <h1 className="mb-0">We Are Here To Grow Your Confidence In Tackling Coding Challenges.</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4">
                    <div className="row g-5">
                        <div className="col-12 wow zoomIn" data-wow-delay="0.2s" style={{padding:"0px 50px 40px 0px"}}>
                            <div className=" rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px", background:"#FFCC00"}}>
                                <i className="fa fa-cubes text-white"></i>
                            </div>
                            <h4 style={{textAlign:"left"}}>Best In Industry</h4>
                            <p className="mb-0" style={{textAlign:"left"}}>Experience the best-in-industry tutoring services tailored to your learning needs and goals.</p>
                        </div>
                        <div className="col-12 wow zoomIn" data-wow-delay="0.6s" style={{padding:"0px 50px 40px 0px"}}>
                            <div className=" rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px", background:"#FFCC00"}}>
                                <i className="fa fa-award text-white"></i>
                            </div>
                            <h4 style={{textAlign:"left"}}>Flexible Scheduling</h4>
                            <p className="mb-0" style={{textAlign:"left"}}>Take advantage of flexible scheduling options to accommodate your busy lifestyle and learning preferences</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{minHeight: "350px", padding:"0 30px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src="/tutoringimage2.jpg" style={{objectFit: "cover"}}/>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row g-5">
                        <div className="col-12 wow zoomIn" data-wow-delay="0.4s" style={{padding:"40px 0px 40px 0px"}}>
                            <div className=" rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px", background:"#FFCC00"}}>
                                <i className="fa fa-users-cog text-white"></i>
                            </div>
                            <h4 style={{textAlign:"left"}}>Professional Staff</h4>
                            <p className="mb-0" style={{textAlign:"left"}}>Count on our professional staff for exceptional tutoring support tailored to your needs.
                            </p>
                        </div>
                        <div className="col-12 wow zoomIn" data-wow-delay="0.8s" style={{padding:"0px 50px 40px 0px"}}>
                            <div className=" rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px", background:"#FFCC00"}}>
                                <i className="fa fa-phone-alt text-white"></i>
                            </div>
                            <h4 style={{textAlign:"left"}}>24/7 Support</h4>
                            <p className="mb-0" style={{textAlign:"left"}}>Get help whenever you need it with our 24/7 tutoring support.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}