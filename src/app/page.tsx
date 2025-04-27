// pages/login.js

import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
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
                <h2>Enter Your Phone Number</h2>
                  <p>We use your mobile number to identify your account</p>
                  <form action="">
                    <div className="form-group">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <div className="input-group">
                        <span className="country-code">
                          <Image 
                            src="/india-flag.png" 
                            alt="India Flag" 
                            width={18} 
                            height={15} 
                          />
                          +91
                        </span>
                        <input 
                          type="number" 
                          id="phoneNumber" 
                          name="phoneNumber" 
                          placeholder="Enter your phone number" 
                          className="form-input"
                        />
                      </div>
                    </div>
                    <div className='form-group mb-90'>
                      <p>By tapping Get started, you agree to the <Link href="#">Terms & Conditions</Link></p>
                    </div>
                    <button type="submit" className="submit-btn">Get Started</button>
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
