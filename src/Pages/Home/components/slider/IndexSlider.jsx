import React from 'react';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider.css";
import "./styles.css";

const content = [
    {
        title: "Vulputate Mollis Ultricies Fermentum Parturient",
        description:
            "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",

        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        user: "Hamed Hasan",
        role: "Full Stack Web Application Developer",
        userProfile: "https://i.ibb.co/RPfn58j/author-action.jpg"
    },
    {
        title: "Tortor Dapibus Commodo Aenean Quam",
        description:
            "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",

        image: "https://images.unsplash.com/photo-1612643557374-13914ebd60c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
        user: "Najmul Hoque",
        role: "Full Stack Developer",
        userProfile: "https://i.imgur.com/0Clfnu7.png"
    },
    {
        title: "Phasellus volutpat metus",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",

        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80",
        user: "Mirazul Islam",
        role: "React JS Developer",
        userProfile: "https://i.imgur.com/4KeKvtH.png"
    },
    {
        title: "Phasellus volutpat metus",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",

        image: "https://images.unsplash.com/photo-1521488517399-2b4ed09655fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        user: "Shovo Gosh",
        role: "Front End Developer",
        userProfile: "https://i.imgur.com/4KeKvtH.png"
    },
    {
        title: "Phasellus volutpat metus",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",

        image: "https://i.imgur.com/DvmN8Hx.jpg",
        user: "Yousuf Miah",
        role: "Web Developer",
        userProfile: "https://i.imgur.com/4KeKvtH.png"
    },
    {
        title: "Phasellus volutpat metus",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
        image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
        user: "Pobarul Islam",
        role: "Front End Engineer",
        userProfile: "https://i.imgur.com/4KeKvtH.png"
    }
];


const IndexSlider = () => {
    return (
        <div className="bg-[#ffffff]">
            <Slider autoplay={4000} className='slider-wrapper'>
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{
                            background: `url('${item.image}') no-repeat center center`
                        }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <a href="#scroll">
                                {/* {item.button} */}
                                <div id="mouse-scroll">
                                    <div className="mouse">
                                        <div className="mouse-in"></div>
                                    </div>
                                    <div>
                                        <span className="down-arrow-1"></span>
                                        <span className="down-arrow-2"></span>
                                        <span className="down-arrow-3"></span>
                                    </div>
                                </div>
                            </a>
                            {/* <button></button> */}
                        </div>
                        <section className='m-[50px]'>
                            <img src={item.userProfile} alt={item.user} />
                            <span>
                                {item.role}
                                <strong>{item.user}</strong>
                            </span>
                        </section>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default IndexSlider;