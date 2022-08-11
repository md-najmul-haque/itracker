import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useReviews from "../../../hooks/useReviews";
import Reviews from "./Reviews";


const Testimonial = () => {
const [reviews] = useReviews()
  return (
    <div className='pt-14 px-10 '>
   
        <div className="w-full lg:w-2/5 mx-auto ">
          <h1 className="text-5xl font-bold text-center mb-20 lg:mb-0 py-4" data-aos="zoom-in"
     data-aos-duration="2000">
            Our Client’s Speak
          </h1>
        </div>
<div >
<Carousel       additionalTransfrom={0}
            arrows
            autoPlaySpeed={4000}
            centerMode={false}
            className=""
            // containerclassName="container"
            // dotListclassName=""
            draggable
            focusOnSelect={false}
            infinite
            // itemclassName=""
            keyBoardControl
            minimumTouchDrag={80}
            partialVisible
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            autoPlay={true}
            showDots
            
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 4,
                partialVisibilityGutter: 0,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 0,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: -40,
              },
            }}
    >
     
     <div className=" ">
                <h1 className="text-2xl text-center lg:text-4xl lg:text-left">Contact With <br /> Other Members</h1>
                <p className="mt-10 p-5 lg:p-0 lg:text-left">Keep an eye on your team's progress and workload. Get real-time charts and other visual highlights to share status, spot potential problems, and keep work on track.</p>
                <div className="p-5 lg:p-0">
                  <button className="btn mt-5 border-none btn-primary text-white">Contact Now</button>
                </div>
                <div>

                </div>
              </div>
              {
      reviews?.result?.map((review: any) => <Reviews onePersonReview={review}/>)
    }

  </Carousel>
</div>
    </div>
  );
};

export default Testimonial;