const AboutComponent = () => {
    return (
      <div>
        <div className="w-10/12 mx-auto">
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
              <div className="relative ">
                <img
                  src="https://i.ibb.co/sv1RK6r/person.jpg"
                  className="max-w-sm rounded-lg "
                />
                <img
                  src="https://i.ibb.co/Y0XL4Ty/parts.jpg"
                  className="max-w-sm rounded-lg w-64 h-52 absolute lg:left-56 left-40	border-white border-8	 top-32"
                />
              </div>
              <div className="lg:ml-20 ml-4 p-8 mt-20 lg:mt-4">
                <span className="text-[#FF3811] text-xl  font-bold">About Us</span>
                <h1 className="text-5xl mt-8 font-bold">We are qualified & of experience in this field</h1>
                <p className="py-6 lg:w-[500px] ">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. <br /> <br />
  
                the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
                </p>
                <button className="btn rounded-none  bg-[#FF3811] text-white border-orange-600 hover:bg-[#FF3811]">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutComponent;
  