import React from 'react'

function Bottomfooter() {
    return (
        <>
          <footer>
	<div className="container-fluid footer">
		 
		  <div className="row">
		 	 <div className="col-md-4 col-lg-3">
		 	 	<ul>
		 	 		<li className="footer_logo"><img src={require('./images/margdarshak-logo.png').default} alt="nicedu org" /><br />A-39 Ist floor Noida Sector-4</li>
		 	 	</ul>
		 	 </div>
         <div className="col-md-4 col-lg-3">
		 	 	<ul>
		 	 		<li className="social_m"><span><img src={require('./images/facebook.png').default} alt="facebook" /></span>Facebook</li>
		 	 	</ul>
		 	 </div>
            <div className="col-md-4 col-lg-3">
		 	 	<ul>
		 	 		<li className="social_m"><span><img src={require('./images/twitter.png').default} alt="twitter" /></span>Twitter</li>
		 	 	</ul>
		 	 </div>
           <div className="col-md-4 col-lg-3">
		 	 	<ul>
		 	 		<li className="social_m"><span><img src={require('./images/instagram.png').default} alt="instagram" /></span>Instagram</li>
		 	 	</ul>
		 	 </div>

		 </div>
		
	</div>
	
</footer>
 <div className="all_">
		 	<p>Copyright © 2021 Nice Education All Rights Reserved.</p>
		 </div>  
        </>
    )
}

export default Bottomfooter
