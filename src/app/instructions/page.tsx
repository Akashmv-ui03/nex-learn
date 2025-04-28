// pages/login.js

import Header from '@/components/header';
import Link from 'next/link';

export default function Instructions() {
  return (
    <>
      <Header />
      <div className='instruction-sec '>
        <div className='container'>
          <div className='instrcution-content'>
            <div className='head'>
              <h2>Ancient Indian History MCQ</h2>
              <div className='details'>
                <div className='row'>
                  <div className=''>
                    <div className='single-item'>
                      <span>Total MCQ's</span>
                      <h3>100</h3>
                    </div>
                  </div>
                  <div className=''>
                    <div className='single-item'>
                      <span>Total Marks</span>
                      <h3>100</h3>
                    </div>
                  </div>
                  <div className=''>
                    <div className='single-item border-none'>
                      <span>Total Time</span>
                      <h3>90:00</h3>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className='instruction-list'>
              <h4>Instrcution List</h4>
              <ul>
                <li>You have 100 minutes to complete the test.</li>
                <li>The test consists of 100 multiple-choice questions.</li>
                <li>You are allowed 2 retest attempts if you do not pass on the first try.</li>
                <li>Each incorrect answer will incur a negative mark of -1/4.</li>
                <li>Ensure you are in a quiet environment and have a stable internet connection.</li>
                <li>Keep an eye on the timer, and try to answer all questions within the given time.</li>
                <li>Do not use any external resources such as dictionaries, websites, or assistance.</li>
                <li>Complete the test honestly to accurately assess your proficiency level.</li>
                <li>Check answers before submitting.</li>
                <li>Your test results will be displayed immediately after submission, indicating whether you have passed or need to retake the test.</li>
              </ul>
              <div className='start-btn'>
                <Link href="/mcq">Start Test</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
