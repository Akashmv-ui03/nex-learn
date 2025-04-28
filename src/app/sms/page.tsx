// pages/login.js

import Image from 'next/image';
import Link from 'next/link';

export default function LoginSms() {
  return (
    <div className="login-page background-one">
      {/* Overlay div */}
      <div className="overlay"></div>

      <div className='container'>
        <div className="page-content">
          <div className="login-sec">
            <div className="col-md-6">
              <div className="left">
                <div className="logo">
                  <Image 
                    src="/nexlearn-logo.webp" 
                    alt="NexLearn Logo" 
                    width={200} 
                    height={50} 
                  />
                </div>
                <div className="login-img">
                  <Image 
                    src="/login-img.webp" 
                    alt="Login Image" 
                    width={335} 
                    height={260} 
                  />
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='right'>
                <div className='login-form'>
                <h2>Enter the code we texted you</h2>
                  <h3>We’ve sent an SMS to +91 1234 567891</h3>
                  <form action="">
                    <div className="form-group">
                      <label htmlFor="SMS Code">SMS Code</label>
                      <div className="">
                        
                        <input 
                          type="number" 
                          id="SmsCode" 
                          name="SmsCode" 
                          placeholder="Enter Code" 
                          className="form-input"
                        />
                      </div>
                    </div>
                    <div className='form-group mb-90'>
                        <p>Your 6 digit code is on its way. This can sometimes take a few moments to arrive.</p>
                        <Link className='resend-code ' href="#">Resend Code</Link>
                    </div>
                    <Link href="/details" className="submit-btn">Get Started</Link>
                    {/* <button type="submit" className="submit-btn">Get Started</button> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
