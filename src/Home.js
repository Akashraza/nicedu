import React from 'react'
import Footer from './Footer';
import Swip from './Swip'
import mm from './images/mm.svg'
import Video from './images/video.mp4'
import {Link } from 'react-router-dom';
import ReactPlayer from 'react-player'
function Home() {
    

    return (
       <>
          <div className="section_banner">
            <div className="banner">
                <h4>Which colour is your study?</h4>
                <video src={Video} autoplay loop muted>
                    
                </video>
                <div className="progressmeter">
                    
                </div>
                
                <a href="#" className="discuss_button discuss_button_1"><span>Know Your study color<i class="fa fa-arrow-right"></i></span></a>
            </div>
        </div>
       <Swip />
       <div className="section_ambition">
	<div className="container-fluid">
	<div className="ambition_heading">
			<span>
            <img src={mm} style={{width:'35px'}}/>
	     	</span>
			<h4>4 steps from career ambition till achievement</h4>
		</div>
         <div className="row">
             <div className="col-sm-12 col-md-6 col-lg-3">
		 	 	<div className="padding-50"></div>
		 	 	 <div className="content_box content_box_1">
		 	 	 	<h3>01</h3>
		 	 	 	<p>Let’s know your career aim. For example, if you want to be an Aeroplane pilot or an IAS officer, type “pilot” or "IAS" + your name and SMS/WhatsApp to 9212401007</p>
		 	 	 </div>
		 	 </div>
		 	 <div className="col-sm-12 col-md-6 col-lg-3">
		 	 	<div className="padding-50"></div>
		 	 	 <div className="content_box content_box_2">
		 	 	 	<h3>02</h3>
		 	 	 	<p>A Career Counsellor will interact with you to conduct an online psychometric assessment to know your aptitude, attitude, and ability.</p>
		 	 	 </div>
		 	 </div>
		 	 <div className="col-sm-12 col-md-6 col-lg-3">
		 	 	<div className="padding-50"></div>
		 	 	 <div className="content_box content_box_3">
		 	 	 	<h3>03</h3>
		 	 	 	<p>Also, the counsellor will assist you to create your career map, education pathways and study schedule.</p>
		 	 	 </div>
		 	 </div>
		 	 <div className="col-sm-12 col-md-6 col-lg-3">
		 	 	<div className="padding-50"></div>
		 	 	 <div className="content_box_">
		 	 	 	<h3>04</h3>
		 	 	 	<p>A team of subject experts will teach you online and the counsellor will manage your career from ambition till achievement.</p>
		 	 	 </div>
		 	 </div>
         </div>
	</div>
	</div>
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
<div className="nice_education p-50px">
	<div className="container">
      <p className="education_p">Nice education is agile, convenient, and effective. Today, too many distractions prevent every child to develop a passion for learning. Our teachers are compassionate and provide motivation as well as a good learning experience.</p>
		<div className="elementor-widget-container">
			<h3 style={{textAlign: 'left', paddingTop: '0', margin: '0'}}><img src={require('./images/book.png').default} alt="book" style={{width:"40px"}}  className="lazyloaded" data-ll-status="loaded" /><noscript><img src="https://nicedu.org/wp-content/uploads/2021/05/book.png" style={{width:"40px"}} /></noscript> Nice education<span style={{color: '#888'}}> Includes </span></h3>						
		</div>
		<div>
			<h3 className="detail">Detail</h3>
		</div>
		<ul class="detail_list">
      	<li><p> Online interactive classes.</p><span><img src={require('./images/right.png').default} alt="Online interactive classes." /></span></li> 
      	<li><p><img src={require('./images/nice_education_img.png').default} alt="Nice education is agile" />Personalised study schedule because every student is different.</p><span><img src={require('./images/right.png').default} alt="Personalised study schedule" /></span></li>
      	<li><p><img src={require('./images/nice_education_img.png').default} alt="Nice education is agile" />Course contents covering the complete syllabus.</p><span><img src={require('./images/right.png').default} alt="Course contents covering" /></span></li>
      	<li><p><img src={require('./images/nice_education_img.png').default} alt="Nice education is agile" />Past classes recorded videos.</p><span><img src={require('./images/right.png').default} alt="Past classes recorded videos" /></span></li>
      	<li><p><img src={require('./images/nice_education_img.png').default} alt="Nice education is agile" />Unlimited test series, progress analysis and reports.</p><span><img src={require('./images/right.png').default} alt="Unlimited test series" /></span></li>
      	<li><p><img src={require('./images/nice_education_img.png').default} alt="Nice education is agile" />Upload doubt and get solutions.</p><span><img src={require('./images/right.png').default} alt="Upload doubt and get solutions" /></span></li>
      	<li><p><img src={require('./images/nice_education_img.png').default} alt="Nice education is agile" />Learning by practice, applied approach to education.</p><span><img src={require('./images/right.png').default} alt="Learning by practice, applied approach to education" /></span></li>
      	<li><p><img src={require('./images/nice_education_img.png').default} alt="Nice education is agile" />Flexible learning in terms of time, content, and delivery.</p><span><img src={require('./images/right.png').default} alt="Flexible learning in terms of time," /></span></li>
      	<li><p><img src={require('./images/nice_education_img.png').default} alt="Nice education is agile" />Students are safely connected with teachers and classmates to study and explore the futures together.</p><span><img src={require('./images/right.png').default} alt="Students are safely connected" /></span></li>
      	<li><p><img src={require('./images/nice_education_img.png').default} alt="Nice education is agile" />Psychometric assessment of aptitude, attitude, and ability to find best fit career AIM.</p><span><img src={require('./images/right.png').default} alt="Psychometric assessment of aptitude" /></span></li>
      	<li><p><img src={require('./images/nice_education_img.png').default} alt="Nice education is agile" />Career map with education & training pathways.</p><span><img src={require('./images/right.png').default} alt="Career map with education" /></span></li>
      	<li><p><img src={require('./images/nice_education_img.png').default} alt="Nice education is agile" />Foundation and gradual preparation for the career and competitive exams</p><span><img src={require('./images/right.png').default} alt="Foundation and gradual" /></span></li>
      	<li><p><img src={require('./images/nice_education_img.png').default} alt="Nice education is agile" />Counsellor assisted career development.</p><span><img src={require('./images/right.png').default} alt="Counsellor assisted career development" /></span></li>
      	<li><p><img src={require('./images/nice_education_img.png').default} alt="Nice education is agile" />You pay once your career aim is achieved.</p><span><img src={require('./images/right.png').default} alt="You pay once your career aim is achieved" /></span></li>

      </ul>
      <p className="pa_2">We have created an innovative education model by designing an open study environment and a blend of experiential learning supported by state-of-the-art technology. These practices can improve problem-solving skills, SMAC intelligence, time management, virtual collaboration, creativity, critical thinking, emotional intelligence to develop into smart, healthy, and happy individuals.</p>
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
  <Footer />
  <Link to="" className="wh">
	<span className="zoom"><i class="fa fa-whatsapp"></i></span>
</Link>
        </>

    );
}

export default Home;
