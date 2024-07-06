import bannerImg from "../../assets/images/banner/4.jpg";
// eslint-disable-next-line react/prop-types
const SharedBanner = ({title}) => {
  return (
    <div>
      <div
        id="slide1"
        className="carousel-item relative lg:w-9/12 w-12/12  lg:h-[300px] h-[150px] mx-8 lg:mx-auto my-8"
      >
        <img src={bannerImg} className="w-full bg-cover rounded-xl	bg-center	" />
        <div className="absolute h-full flex justify-start gap-4  rounded-xl  left-0 top-0 pl-8 pt-4 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className=" lg:w-1/3 w-2/3 lg:mt-28 mt-8 ">
            <h2 className="lg:text-4xl text-xl text-white space-y-4 lg:leading-snug font-bold	">
              {title}
            </h2>
          </div>
        </div>
        <div className="absolute flex justify-center    transform -translate-y-1/2 left-5 right-5 bottom-0">
          <div
            className="relative w-0 h-0 text-white mt-[-50px]"
            style={{
              borderBottom: "50px solid #ff3811",
              borderLeft: "25px solid transparent",
              borderRight: "25px solid transparent",
              width: "250px",
              textAlign: "center",
              
            }}
          >
            <span> Home/{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharedBanner;
