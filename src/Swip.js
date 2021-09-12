import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function Swip() {
	  var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
       {
          breakpoint: 13000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
         {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
	return (
		 
		 <div className="ensure_career">
        <div className="container-fluid">
        <h2 className="heading_e">Ensure Your career</h2>    
        <Slider {...settings}>
       
		    <div>
		    <div className="career_box">
				 	<div className="title_h">
				 		<span className="imgb"><img src={require('./images/support.png').default} alt="construction" /></span>
				 		<h5> Construction, Mining, Fuel, Energy and Environment</h5>
				 		<p>Lorem ipsum dolor sit amet, </p>
				 	</div>
				 	<span className="icon_hover"><img src={require('./images/support.png').default} alt="construction" /></span>
				 </div>
		    </div>
           <div>
		    <div className="career_box">
				 	<div className="title_h">
				 		<span className="imgb"><img src={require('./images/art.png').default} alt="construction" /></span>
				 		<h5> Arts, Design, Entertainment, Media, Games & Sports</h5>
				 		<p>Lorem ipsum dolor sit amet, </p>
				 	</div>
				 	<span className="icon_hover"><img src={require('./images/art.png').default} alt="construction" /></span>
				 </div>
		    </div>
             <div>
		    <div className="career_box">
				 	<div className="title_h">
				 		<span className="imgb"><img src={require('./images/online-banking.png').default} alt="construction" /></span>
				 		<h5> Banking, Insurance, Accountancy and Financial Services</h5>
				 		<p>Lorem ipsum dolor sit amet, </p>
				 	</div>
				 	<span className="icon_hover"><img src={require('./images/online-banking.png').default} alt="construction" /></span>
				 </div>
		    </div>
           <div>
		    <div className="career_box">
				 	<div className="title_h">
				 		<span className="imgb"><img src={require('./images/bar-chart.png').default} alt="construction" /></span>
				 		<h5> Business, Management, HR, and Administrative Support</h5>
				 		<p>Lorem ipsum dolor sit amet, </p>
				 	</div>
				 	<span className="icon_hover"><img src={require('./images/bar-chart.png').default} alt="construction" /></span>
				 </div>
		    </div>
          <div>
		    <div className="career_box">
				 	<div className="title_h">
				 		<span className="imgb"><img src={require('./images/defence.png').default} alt="construction" /></span>
				 		<h5> Defence and Armed Forces</h5>
				 		<p>Lorem ipsum dolor sit amet, </p>
				 	</div>
				 	<span className="icon_hover"><img src={require('./images/defence.png').default} alt="construction" /></span>
				 </div>
		    </div>
          <div>
		    <div className="career_box">
				 	<div className="title_h">
				 		<span className="imgb"><img src={require('./images/education.png').default} alt="construction" /></span>
				 		<h5>Education, Training, Library and Career Counselling</h5>
				 		<p>Lorem ipsum dolor sit amet, </p>
				 	</div>
				 	<span className="icon_hover"><img src={require('./images/education.png').default} alt="construction" /></span>
				 </div>
		    </div>
		 		  <div>
		    <div className="career_box">
				 	<div className="title_h">
				 		<span className="imgb"><img src={require('./images/agriculture.png').default} alt="construction" /></span>
				 		<h5>Agriculture, Forestry, Fishing, Animal & Veterinary</h5>
				 		<p>Lorem ipsum dolor sit amet, </p>
				 	</div>
				 	<span className="icon_hover"><img src={require('./images/agriculture.png').default} alt="construction" /></span>
				 </div>
		    </div>
		 		  <div>
		    <div className="career_box">
				 	<div className="title_h">
				 		<span className="imgb"><img src={require('./images/government.png').default} alt="construction" /></span>
				 		<h5>Government and Public Administration</h5>
				 		<p>Lorem ipsum dolor sit amet, </p>
				 	</div>
				 	<span className="icon_hover"><img src={require('./images/government.png').default} alt="construction" /></span>
				 </div>
		    </div>
        </Slider>
      </div>
      </div>
      
     

	)
}

export default Swip