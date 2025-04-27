"use client";

import Link from "next/link";
import { useState } from "react";

export default function ComprehensiveButton() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <>
            <button className="comprehensive-btn" onClick={togglePopup}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 64C0 46.3 14.3 32 32 32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64zM192 192c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 96l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zM0 448c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32zM127.8 268.6L25.8 347.9C15.3 356.1 0 348.6 0 335.3L0 176.7c0-13.3 15.3-20.8 25.8-12.6l101.9 79.3c8.2 6.4 8.2 18.9 0 25.3z"/>
                </svg>
                <span>Read Comprehensive Paragraph</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                </svg>
            </button>

            {isPopupOpen && (
                <div className="popup-overlay comprehensive-content" onClick={togglePopup}>
                    <div className="popup-content " onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={togglePopup}>×</button>
                        <h2>Comprehensive Paragraph</h2>
                        <p> Ancient Indian history spans several millennia and offers a profound glimpse into the origins of one of the world's oldest and most diverse civilizations. It begins with the Indus Valley Civilization (c. 2500–1500 BCE), which is renowned for its advanced urban planning, architecture, and water management systems. Cities like Harappa and Mohenjo-Daro were highly developed, with sophisticated drainage systems and well-organized streets, showcasing the early brilliance of Indian civilization. The decline of this civilization remains a mystery, but it marks the transition to the next significant phase in Indian history.
                            Following the Indus Valley Civilization, the Vedic Period (c. 1500–600 BCE) saw the arrival of the Aryans in northern India. This period is characterized by the composition of the Vedas, which laid the foundations of Hinduism and early Indian society. </p>

                            <p> It was during this time that the varna system (social hierarchy) began to develop, which later evolved into the caste system. The Vedic Age also witnessed the rise of important kingdoms and the spread of agricultural practices across the region, significantly impacting the social and cultural fabric of ancient India.</p>

                            <p>The 6th century BCE marked a turning point with the emergence of new religious and philosophical movements. Buddhism and Jainism, led by Gautama Buddha and Mahavira, challenged the existing Vedic orthodoxy and offered alternative paths to spiritual enlightenment. These movements gained widespread popularity and had a lasting influence on Indian society and culture. During this time, the kingdom of Magadha became one of the most powerful, laying the groundwork for future empires.</p>

                            <p> The Maurya Empire (c. 322–185 BCE), founded by Chandragupta Maurya, became the first large empire to unify much of the Indian subcontinent. Under Ashoka the Great, the empire reached its zenith, and Buddhism flourished both in India and abroad. Ashoka's support for non-violence, his spread of Buddhist teachings, and his contributions to governance and infrastructure had a lasting legacy on Indian history. His reign marks one of the earliest and most notable examples of state-sponsored religious tolerance and moral governance.</p>
                        <div className="btn">
                            <Link href="#">Minimize</Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
