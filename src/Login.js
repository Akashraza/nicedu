import React from 'react'

function Login() {
	return (
		<>
 

 
  <div className="modal fade" id="forgotpassword" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle"><img className="icon2" src={require('./images/icon.png').default} />Forgot Password</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form className="myForm">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email / Mobile" />
            <button type="button" className="Verify">Submit</button>
        </form>
      </div>
     
    </div>
  </div>
</div>


<div className="section_login">
     <div className="admin_">
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-12 col-lg-3">
                
                       <h1 className="login-title font-weight-bold text-center mb-3"><img className="icon2" src={require('./images/icon.png').default} />Sign In</h1>
                        <form>
                    
                <div className="my-auto">
                       <div className="form-group field">
                            <span><i className="fa fa-envelope"></i></span><input type="text" name="loginemail" id="loginemail" className="form-control" placeholder="Email" />
                             <div id="loginemailerror"></div>
                        </div>
                        <div className="form-group mt-3 field">
                        
                            <span><i className="fa fa-unlock-alt"></i></span><input type="password" name="password" id="password" className="form-control" placeholder="Passsword" />
                            <div id="passworderror"></div>
                        </div>
                         <div id="loginerror"></div>
                        <div id="loginmeserror"></div>
                         <div id="example1">
                           <div style={{width:'304px',height:'78px'}}>
                           <div>
                             <iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LdMHEMbAAAAAGVfxPf1WvX3Bu5qy1CfhAmxQVdo&amp;co=aHR0cHM6Ly9uaWNlZHUub3JnOjQ0Mw..&amp;hl=en-GB&amp;v=Eyd0Dt8h04h7r-D86uAD1JP-&amp;theme=light&amp;size=normal&amp;cb=yrbmv8wx3h3f" width="304" height="78" role="presentation" name="a-343ze5its3tv" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
                           </div>
                            <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response"  style={{width: '250px',height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none'}}>
                                
                            </textarea>
                           </div>
                          <iframe style={{display: 'none'}}></iframe>
                         </div>
                         <br />
                       
                       <button className="Verify">Login</button>&nbsp;&nbsp;&nbsp;
                    <a href="#" className="forgot-password-link" data-toggle="modal" data-target="#forgotpassword">Forgot password?</a>
                  </div>
                </form>
                </div>
               
                 <div className="col-sm-1 ">
                    <div className="line">
                        
                    </div>
                </div>
                 <div className="col-md-12 col-lg-7">
                     <h1 className="login-title mar_left font-weight-bold text-center "><img className="icon2" src={require('./images/icon.png').default} />Sign Up</h1>
                       <form >
                               <div className="row ">
                                 <div className="col-sm-12 col-md-5 p-2  field">
                                       <span><i className="fa fa-envelope"></i></span><input type="email" className=" input-text form-control" name="email" id="email" placeholder="Email" required="" /><button className="send">Send</button>
                                   </div>
                                    <div className="col-sm-12 col-md-3 p-2">
                                        <div className="otp inputs">
                                         <input type="text" name="n1" className="otp-enter active input-text form-control" max="9999"  maxlength="1"  onkeypress='return event.charCode >= 48 && event.charCode <= 57'/>
          <input type="text" name="n2" className="otp-enter input-text form-control" maxlength="1"  onkeypress='return event.charCode >= 48 && event.charCode <= 57'/>
          <input type="text" name="n3" className="otp-enter input-text form-control" maxlength="1"  onkeypress='return event.charCode >= 48 && event.charCode <= 57'/>
          <input type="text" name="n4" className="otp-enter input-text form-control" max="9999"  maxlength="1"  onkeypress='return event.charCode >= 48 && event.charCode <= 57'/>
                                        </div>
                                   </div>
                                   <div className="col-sm-12 col-md-3 p-2">
                                       <div className="otp">
                                        <button className="Verify Verify_">Verify</button>
                                        </div>
                                   </div>
                               </div>
                               <div className="row">
                                   <div className="col-sm-12 col-md-5 p-2 field">
                                        <span><i className="fa fa-phone-square"></i></span><input type="text" className=" input-text form-control" placeholder="Mobile" name="mobile" id="mobile" autocomplete="off" pattern="^[0-9]{10}$" maxlength="10" required="" /><button className="send">Send</button>
                                   </div>
                                   <div className="col-sm-12 col-md-3 p-2">
                                        <div className="otp input_">
                                         <input type="text" name="n1" className="otp-enter active input-text form-control" max="9999"  maxlength="1"  onkeypress='return event.charCode >= 48 && event.charCode <= 57'/>
          <input type="text" name="n2" className="otp-enter input-text form-control" maxlength="1"  onkeypress='return event.charCode >= 48 && event.charCode <= 57'/>
          <input type="text" name="n3" className="otp-enter input-text form-control" maxlength="1"  onkeypress='return event.charCode >= 48 && event.charCode <= 57'/>
          <input type="text" name="n4" className="otp-enter input-text form-control" max="9999"  maxlength="1"  onkeypress='return event.charCode >= 48 && event.charCode <= 57'/>
                                        </div>
                                   </div>
                                   <div className="col-sm-12 col-md-3 p-2">
                                       <div className="otp">
                                        <button className="Verify Verify_">Verify</button>
                                        </div>
                                   </div>
                               </div>  
                                 <div className="row">
                                   
                                    <div className="col-sm-12 col-md-5 p-2 field">
                                      <span><i className="fa fa-user"></i></span><input type="text" className=" input-text form-control" name="name" id="name" placeholder="Full Name" required="" />
                                   </div>
                                   <div className="col-sm-12 col-md-3 mt-1px">
                                         <select className="form-control" name="usertype" id="usertype">
                                    <option value="">User Type</option>
                                            <option value="S">Student</option>
                                            <option value="C">Counsellor</option>
                                            <option value="J">Jobseeker</option>
                                            
                                </select> 
                                   </div>
                                   <div className="col-sm-12 col-md-2">
                                       
                                   </div>
                                  
                               </div> 

                               <div className="row" style={{position:'relative'}}>
                                   
                                    <div className="col-sm-12  p_">
                                     
                                     <span className="i_agree"><span><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" required="" /></span>I agree to terms of service and privacy policy. ||</span>
                                     <span className="passsword_sent">The Password will be sent to your email.</span>
                                   </div>
                                  
                               </div>
                               <div className="row">
                                  
                               </div>               
                         <div className="row">
                
                          <div className="col-sm-12 pd_">
                              
                                <button type="button " className="register_now">Register</button>
                          </div>
                        
                    </div>

                        </form>   
                 </div>
            </div>

        </div>
     </div>
</div>
		</>
	)
}

export default Login
