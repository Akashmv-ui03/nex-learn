// pages/login.js

import Header from '@/components/header';
import Link from 'next/link';
import Image from 'next/image';
import ComprehensiveButton from '@/components/comprehensive';



export default function MCQ() {
  return (
    <>
      <Header />
      <div className='results-sec'>
        <div className='container'>
            <div className='result-col'>
                <div className='head'>
                    <span>Marks Obtained:</span>
                    <h2>100 / 100</h2>
                </div>
                <div className='content'>
                    <ul>
                        <li>
                            <div className='left'>
                                <img src="/total.svg" className='total' alt="total icon" />
                                <span>Total Questions</span>
                            </div>
                            <span className='count'>100</span>
                        </li>
                        <li>
                            <div className='left'>
                                <img src="/correct.svg" className='correct' alt="correct-icon" />
                                <span>Correct Answers:</span>
                            </div>
                            <span className='count'>003</span>
                        </li>
                        <li>
                            <div className='left'>
                                <img src="/incorrect.svg" className='incorrect' alt="incorrect icon" />
                                <span>Incorrect Answers:</span>
                            </div>
                            <span className='count'>001</span>
                        </li>
                        <li>
                            <div className='left'>
                                <img src="/not-attend.svg" className='not-attend' alt="not-attend icon" />
                                <span>Not Attended Questions:</span>
                            </div>
                            <span className='count'>096</span>
                        </li>
                    </ul>
                    <Link className='done-btn' href="#">Done</Link>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
