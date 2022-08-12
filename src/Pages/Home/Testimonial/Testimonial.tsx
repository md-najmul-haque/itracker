import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useReviews from "../../../hooks/useReviews";
import Reviews from "./Reviews";
import { FaStar } from "react-icons/fa";
import { uniqueNamesGenerator } from 'unique-names-generator';

const Testimonial = () => {
const [reviews] = useReviews()

const desc = [
  'Since they’re posted on third-party sites and from real users of your products, consumers view these reviews as a reliab',
  'many sites where consumers can leave their reviews. These include broad customer review sites, such as Google Reviews, F',
  'After all, reviews are just as necessary for your business to improve as they are for customers to make informed decisio',

];
const color = [
  'Green', 'Red', 'Yellow', 'Black'
]

const description: string = uniqueNamesGenerator({
  dictionaries: [color, desc],
  length: 2,
  separator: ' '
}); // Green Luke Skywalker

const starWarsCharacters = [
  'Han Solo',
  'Jabba The Hutt',
  'R2-D2',
  'Luke Skywalker',
  'Princess Leia Organa',
  'Edward',
  'Jonathan',
  'Jonathan',
  'Elizabeth',
  'Ophelia',
  'Jonathan',
];
const colors = [
  'Green', 'Red', 'Yellow', 'Black'
]

const client: string = uniqueNamesGenerator({
  dictionaries: [colors, starWarsCharacters],
  length: 2,
  separator: ' '
}); // Green Luke Skywalker




  return (

    <div className='pt-14 px-10 '>
   
        <div className="w-full lg:w-2/5 mx-auto ">
          <h1 className="text-5xl font-bold text-center mb-20 lg:mb-0 py-4" data-aos="zoom-in"
     data-aos-duration="2000">
            Our Client’s Speak
          </h1>
        </div>
        <div >
        <Carousel additionalTransfrom={0}
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
     <div className="card card-compact w-72 h-96 bg-base-100 shadow-xl flex py-10 items-center mx-16 md:mx-28 lg:mx-0">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src='https://i.pravatar.cc/300' alt='avatar' />
          </div>
        </div>
        <h2 className="card-title text-center my-5">{client}</h2>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className={`text-center px-5 pt-3 h-[120px]`} >
            {description}
          </p>
          <div className="flex">
          
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
        
          </div>
        </div>
      </div>
              </div>
              {
      reviews?.result?.map((review: any) => <Reviews onePersonReview={review}/>)
    }

  </Carousel>
</div>
</div>


  )
};

export default Testimonial;