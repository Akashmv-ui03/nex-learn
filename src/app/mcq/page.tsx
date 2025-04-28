// pages/login.js

import Header from '@/components/header';
import Link from 'next/link';
import Image from 'next/image';
import ComprehensiveButton from '@/components/comprehensive';



export default function MCQ() {
  return (
    <>
      <Header />
      <div className='mcq-question-sec'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7 mb-30'>
                <div className='left'>
                    <div className='head'>
                        <h2>Ancient Indian History MCQ</h2>
                        <span>01/100</span>
                    </div>
                    <div className='question'>
                       <ComprehensiveButton/>
                        <ul>
                            <li>Identify the site shown in the image below, which is one of the major urban centers of the Indus Valley Civilization.</li>
                        </ul>
                        <div className='question-image'>
                            <Image src="/question-img.png" alt="question image " width={290} height={160} />
                        </div>
                    </div>
                    <div className="answer">
                        <span>Choose The Answer</span>
                        <div className="answer-options">
                            <label className="answer-option">
                                <span>A. Pataliputra</span>
                                <input type="radio" name="question1" value="option1" />
                            </label>

                            <label className="answer-option">
                                <span>B. Harappa</span>
                                <input type="radio" name="question1" value="option2" />
                            </label>

                            <label className="answer-option">
                                <span>C. Mohenjo-Daro</span>
                                <input type="radio" name="question1" value="option3" />
                            </label>

                            <label className="answer-option">
                                <span>D. Lothal</span>
                                <input type="radio" name="question1" value="option4" />
                            </label>
                        </div>
                    </div>
                    <div className='buttons'>
                        <Link href="/result" className='review'>Mark for Review</Link>
                        <Link href="/result" className='prev'>Previous</Link>
                        <Link href="/result" className='next'>Next</Link>
                    </div>

                </div>
            </div>
            <div className='col-md-5'>
                <div className='right'>
                    <div className='head'>
                        <h2>Question No. Sheet:</h2>
                        <div className='time'><span>Remaining Time: </span>
                            <span className='timer'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l16 0 0 34.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6L256 64l16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L224 0 176 0zm72 192l0 128c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-128c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg>
                                87:00
                            </span>
                        </div>
                    </div>
                    <div className='numbers'>
                        <ul>
                            {Array.from({ length: 100 }, (_, index) => (
                                <li key={index}>{index + 1}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='labels'>
                        <ul>
                            <li>
                                <span className='col green'></span>
                                <span className='label-name'>Attended</span>
                            </li>
                            <li>
                                <span className='col red'></span>
                                <span className='label-name'>Not Attended</span>
                            </li>
                            <li>
                                <span className='col purple'></span>
                                <span className='label-name'>Marked for Review</span>
                            </li>
                            <li>
                                <span className='col green'><span className='purple'></span></span>
                                <span className='label-name'>Answered and Marked for Review</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
