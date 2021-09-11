import React from 'react'

function Home() {
    

    return (
       <>
          <div className="section_banner">
            <div className="banner">
                <h4>Which colour is your study?</h4>
                <video src={require('./images/video.mp4').default} autoplay loop muted>
                    
                </video>
                <div className="progressmeter">
                    
                </div>
                
                <a href="#" className="discuss_button discuss_button_1"><span>Know Your study color<i class="fa fa-arrow-right"></i></span></a>
            </div>
        </div>
        <section className="ensure_career">
	<div className="container-fluid">
		 <h2 className="heading_e">Ensure Your career</h2>
		 <div className="row">
		<div className="swiper mySwiper">
	      <div className="swiper-wrapper">
	        <div className="swiper-slide">
	        	<div className="career_box">
		 		 	<div className="title_h">
		 		 		<span className="imgb"><img src="images/support.png" alt="construction" /></span>
		 		 		<h5> Construction, Mining, Fuel, Energy and Environment</h5>
		 		 		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		 		 		tempor incididunt</p>
		 		 	</div>
		 		 	<span className="icon_hover"><img src="images/support.png" alt="construction" /></span>
		 		 </div>
	        </div>
	        <div className="swiper-slide">
	        		 <div className="career_box">
		 		 	<div className="title_h">
		 		 		<span className="imgb"><img src="images/art.png" alt="entertainment" /></span>
		 		 		<h5> Arts, Design, Entertainment, Media, Games & Sports</h5>
		 		 		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		 		 		tempor incididunt</p>
		 		 	</div>
		 		 	<span className="icon_hover"><img src="images/art.png" alt="entertainment" /></span>
		 		 </div>
	        </div>
	        <div className="swiper-slide">
	        	 <div className="career_box">
		 		 	<div className="title_h">
		 		 		<span className="imgb"><img src="images/online-banking.png" alt="banking" /></span>
		 		 		<h5> Banking, Insurance, Accountancy and Financial Services</h5>
		 		 		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		 		 		tempor incididunt</p>
		 		 	</div>
		 		 	<span className="icon_hover"><img src="images/online-banking.png" alt="banking" /></span>
		 		 </div>
	        </div>
	        <div className="swiper-slide">
	        	 <div className="career_box">
		 		 	<div className="title_h">
		 		 		<span className="imgb"><img src="images/bar-chart.png" alt="business" /></span>
		 		 		<h5> Business, Management, HR, and Administrative Support</h5>
		 		 		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		 		 		tempor incididunt</p>
		 		 	</div>
		 		 	<span className="icon_hover"><img src="images/bar-chart.png" alt="business" /></span>
		 		 </div>
	        </div>
	        <div className="swiper-slide">
	        	<div className="career_box">
		 		 	<div className="title_h">
		 		 		<span className="imgb"><img src="images/defence.png" alt="defence" /></span>
		 		 		<h5> Defence and Armed Forces</h5>
		 		 		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		 		 		tempor incididunt</p>
		 		 	</div>
		 		 	<span className="icon_hover"><img src="images/defence.png" alt="defence" /></span>
		 		 </div>
	        </div>
	        <div className="swiper-slide">
	        	<div className="career_box">
		 		 	<div className="title_h">
		 		 		<span className="imgb"><img src="images/education.png" alt="education" /></span>
		 		 		<h5>Education, Training, Library and Career Counselling</h5>
		 		 		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		 		 		tempor incididunt</p>
		 		 	</div>
		 		 	<span className="icon_hover"><img src="images/education.png" alt="education" /></span>
		 		 </div>
	        </div>
	        <div className="swiper-slide">
	        	 <div className="career_box">
		 		 	<div className="title_h">
		 		 		<span className="imgb"><img src="images/agriculture.png" alt="agriculture" /></span>
		 		 		<h5>Agriculture, Forestry, Fishing, Animal & Veterinary</h5>
		 		 		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		 		 		tempor incididunt</p>
		 		 	</div>
		 		 	<span className="icon_hover"><img src="images/agriculture.png" alt="agriculture" /></span>
		 		 </div>
	        </div>
	        <div className="swiper-slide">
	        	 <div className="career_box">
		 		 	<div className="title_h">
		 		 		<span className="imgb"><img src="images/government.png" alt="government" /></span>
		 		 		<h5>Government and Public Administration</h5>
		 		 		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		 		 		tempor incididunt</p>
		 		 	</div>
		 		 	<span className="icon_hover"><img src="images/government.png" alt="government" /></span>
		 		 </div>
	        </div>
	   
	      </div>
	      <div className="swiper-pagination"></div>
	    </div>
		 </div>
	</div>
	
</section>
       
<div className="section_discuss">
	<div className="container-fluid padding_50px">
		<div className="discuss_content">
			<div className="left_content">
				<p>We promise to make you what you want to be Get back your fee if you havent achieved your career aim</p>
				<a href="#" className="discuss_button"><span>DISCUSS YOUR CAREER AIM<i className="fa fa-arrow-right"></i></span></a>
			</div>
			
		</div>
		
	</div>
</div>
<div className="quality_education">
	<div className="container">
		<h4 className="quality_education_heading"><img src={require('./images/quality_education.png').default} alt="Quality education now" />Quality education now <span>is highly accessible and affordable</span></h4>
		<p className="pa_3">As per new education policy 5+3+3+4 pattern.</p>
	<table width="100%" className="subject">
		<thead>
			<tr className="table-header">
				<th ><span><img src={require('./images/standard-school.png').default} alt="all school boards" /></span>Standard (all school boards)</th>
				<th><span><img src={require('./images/all-subjects.png').default} alt="all subjects" /></span>All Subjects</th>
				<th><span><img  src={require('./images/online-class.png').default} alt="all classNamees in a group" /></span> All subjects, all classNamees in a group</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>LKG – KG – UKG – 1st – 2nd</td>
				<td>₹14,160 per year</td>
				<td>₹42,480 for 4 years</td>
			</tr>
			<tr>
				<td>3rd – 4th – 5th</td>
				<td>₹16,992 per year</td>
				<td>₹42,480 for 3 years</td>
			</tr>
			<tr>
				<td>6th – 7th – 8th</td>
				<td>₹19,824 per year</td>
				<td>₹49,560 for 3 years</td>
			</tr>
			<tr>
				<td>9th – 10th</td>
				<td>₹25,488 per year</td>
				<td>₹38,232 for 2 years</td>
			</tr>
			<tr>
				<td>11th – 12th</td>
				<td>₹32,568 per year</td>
				<td>₹48,852 for 2 years</td>
			</tr>
			<tr>
			<td colspan="2">
			<div className="td-content-wrapper"><div><span>We inspire and prepare students to succeed in their careers.</span></div>
		   </div>
			</td>
			<td colspan="">
			<div className="td-content-wrapper">
			 <a href="">Buy Now</a>
			</div>
			</td>

		 </tr>
		</tbody>

	</table>
	</div>
</div>

<div className="section_democlass">
<div className="bottom_">
		<div className="empty"><p>Subscribe to our Newsletter</p></div>
		<form className="myform">
			<input type="text" name="name" placeholder="Name" />
			<input type="text" name="number" placeholder="Number" />
			<input type="email" name="email" placeholder="Email Address *" />
			<button type="button">Subscribe!</button>
		</form>
	</div>
	<div className="top_">
		<div className="con">
			
			 <h3>Take a demo className free
<br />and without obligation!</h3>
<a href="#" className="discuss_button"><span>TAKE DEMO<i className="fa fa-arrow-right"></i></span></a>
		</div>
		<div className="con">
			 
		</div>
	</div>
</div>
<button className="scrollup">
     <i className="fa fa-chevron-up"></i>
  </button>
        </>
    );
}

export default Home;
