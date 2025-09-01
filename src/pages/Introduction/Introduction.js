// Importing images
import HomeImage from '../../assets/home-image.png';

// Importing React Hooks
import { useState } from 'react';

// Importing CSS
import './introduction.css';
import './introduction-layout.css';
import './introduction-screen-shrink.css';

export default function Introduction(props) {
    return (
        <>
            {/* Main content */}
            <main className='main'>
                <div className='home-image-container'>
                    <img className='home-image' src={HomeImage} />
                    <div className='home-welcome-message-container'>
                        <h1>Câu chuyện của Coffee Premium</h1>
                        <p>Hành trình 15 năm kiến tạo hương vị cà phê tuyệt vời</p>
                    </div>
                </div>

                {/* Layout setting */}
                <div className='container three-columns'>
                    {/* Aside left */}
                    <aside className='aside-left'></aside>

                    {/* Actual Main Content */}
                    <section className='main-content'>

                    </section>

                    {/* Aside right */}
                    <aside className='aside-right'></aside>
                </div>
            </main>
        </>
    )
};