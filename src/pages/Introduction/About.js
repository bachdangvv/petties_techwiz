// Importing components
import DeploymentTimeline from './sub-components/DeploymentTimeline';
import IntroductionFooter from './sub-components/IntroductionFooter';

// Importing images (pet care theme)
import HomeImage from '../../assets/homepage/bg1.png';
import firstImage from '../../assets/homepage/str1.png';
import secondImage from '../../assets/homepage/str2.png';
import thirdImage from '../../assets/homepage/str3.png';
import fourthImage from '../../assets/homepage/str4.png';
import DrBhimrao from '../../assets/homepage/doctor1.png';
import Karim from '../../assets/homepage/doctor2.png';
import Anil from '../../assets/homepage/doctor3.png';

// Importing React Hooks
import { Link } from 'react-router-dom';

// Importing utils


// Importing CSS
import './introduction.css';
import './introduction-layout.css';
import './introduction-screen-shrink.css';

export default function About(props) {
    return (
        <>
            {/* Main content */}
            <main className='introduction-main'>
                {/* Home image container */}
                <div className='introduction-home-image-container'>
                    {/* Home image */}
                    <img className='introduction-home-image' src={HomeImage} alt='Welcome to our website' />

                    <div className='home-welcome-message-container'>
                        {/* Welcome message */}
                        <h1>Our Pet Care Journey</h1>
                        <p>Partnering with you to nurture your pet’s health and happiness</p>
                    </div>
                </div>

                {/* Accomplishment container */}
                <div className='store-accomplishments-container'>
                    {/* Accomplishment (4 accomplishments) */}
                    <div className='store-accomplishment'>
                        <i className="bi bi-award accomplishment-icon"></i>
                        <h1>10+</h1>
                        <p>Years of pet care</p>
                    </div>

                    <div className='store-accomplishment'>
                        <i className="bi bi-people-fill accomplishment-icon"></i>
                        <h1>5,000+</h1>
                        <p>Pet families served</p>
                    </div>

                    <div className='store-accomplishment'>
                        <i className="bi bi-heart-pulse accomplishment-icon"></i>
                        <h1>20,000+</h1>
                        <p>Consultations and treatments</p>
                    </div>

                    <div className='store-accomplishment'>
                        <i className="bi bi-globe accomplishment-icon"></i>
                        <h1>30+</h1>
                        <p>Care hubs nationwide</p>
                    </div>
                </div>

                {/* Layout setting */}
                <div className='introduction-container three-columns'>
                    {/* Aside left */}
                    <aside className='aside-left'></aside>

                    {/* Grid Responsive Main Content */}
                    <section className='introduction-main-content'>

                        {/* Company founding story & signature products images container */}
                        <div className='company-summarization-container'>
                            {/* Founding story container */}
                            <div className='founding-story-container'>
                                {/* The founding story contains a heading, 3 paragraphs and 'Learn More' button */}

                                {/* The story heading */}
                                <h1>Our Care Story</h1>

                                {/* Paragraph 1 */}
                                <p>
                                    FurEver Care was founded from a love for animals and the desire to provide comprehensive care: nutrition, exercise, training, and veterinary services. Starting from a small clinic in 2014, we have become a trusted destination for pet parents.
                                </p>

                                {/* Paragraph 2 */}
                                <p>
                                    Guided by the philosophy “Health First,” we focus on tailored nutrition, complete vaccination schedules, and safe environments so pets can thrive.
                                </p>

                                {/* Paragraph 3 */}
                                <p>
                                    Today, FurEver Care supports over 5,000 families with medical care, spa and grooming, basic training, and nutrition counseling.
                                </p>

                                <Link to="/contact" className='learn-more-button'>Book a consultation</Link>
                            </div>

                            {/* Signature products images container */}
                            <div className='signature-products-images-container'>

                                {/* Images in left side will be placed higher than the right side */}

                                {/* Left side (2 images) */}
                                <div className='left-side-container'>
                                    <img
                                        src={firstImage}
                                        className='signature-product-image'
                                        alt='Featured service'
                                    />

                                    <img
                                        src={secondImage}
                                        className='signature-product-image'
                                        alt='Featured service'
                                    />
                                </div>
                                
                                {/* Right side (2 images) */}
                                <div className='right-side-container'>
                                    <img
                                        src={thirdImage}
                                        className='signature-product-image'
                                        alt='Featured service'
                                    />

                                    <img
                                        src={fourthImage}
                                        className='signature-product-image'
                                        alt='Featured service'
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Core values container */}
                        <div className='core-values-container'>
                            {/* The Heading container */}
                            <div className='core-values-heading-container'>
                                <h1>Our Core Values</h1>
                                <p>The values that guide everything we do at FurEver Care</p>
                            </div>

                            {/* The container of values (4 cards) */}
                            <div className='value-cards-container'>
                                {/* Card 1 */}
                                <div className='value-card'>
                                    <i className="bi bi-shield-check value-icon"></i>
                                    <h3>Safe and evidence-based</h3>
                                    <p>
                                        Care protocols designed by veterinarians and grounded in science
                                    </p>
                                </div>

                                {/* Card 2 */}
                                <div className='value-card'>
                                    <i className="bi bi-heart value-icon"></i>
                                    <h3>Compassionate and attentive</h3>
                                    <p>
                                        Every pet is family and receives attentive, loving care
                                    </p>
                                </div>

                                {/* Card 3 */}
                                <div className='value-card'>
                                    <i className="bi bi-people value-icon"></i>
                                    <h3>Pet parents at the center</h3>
                                    <p>
                                        We listen to your needs and support you throughout your journey
                                    </p>
                                </div>

                                {/* Card 4 */}
                                <div className='value-card'>
                                    <i className="bi bi-bandaid value-icon"></i>
                                    <h3>Prevention and recovery</h3>
                                    <p>
                                        We prioritize vaccination, deworming, and regular checkups
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Leader team container */}
                        <div className='leader-team-container'>
                            {/* Leader team heading container */}
                            <div className='leader-team-heading-container'>
                                <h1>Our Veterinary Team</h1>
                                <p>Trusted experts dedicated to your pet’s health</p>
                            </div>

                            {/* Leader cards container (3 cards) */}
                            <div className='leader-cards-container'>
                                {/* Card 1 */}
                                <div className='leader-card'>
                                    <img src={DrBhimrao} alt='Dr. Bhimrao' />
                                    <h3>Dr. Bhimrao</h3>
                                    <div className='role-badge'>Chief Veterinarian</div>
                                    <p>
                                        Internal medicine specialist with deep experience managing chronic conditions
                                    </p>
                                </div>

                                {/* Card 2 */}
                                <div className='leader-card'>
                                    <img src={Karim} alt='Dr. Karim' />
                                    <h3>Dr. Karim</h3>
                                    <div className='role-badge'>Nutrition Specialist</div>
                                    <p>
                                        Tailored diet plans by breed, age, and health condition
                                    </p>
                                </div>

                                {/* Card 3 */}
                                <div className='leader-card'>
                                    <img src={Anil} alt='Dr. Anil' />
                                    <h3>Dr. Anil</h3>
                                    <div className='role-badge'>Surgery</div>
                                    <p>
                                        Safe procedures and dedicated post-op care
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Deployment journey container */}
                        <div className='deployment-journey-container'>
                            {/* Deployment journey heading container */}
                            <div className='deployment-journey-heading-container'>
                                <h1>Our Service Milestones</h1>
                                <p>Key milestones in our pet care services</p>
                            </div>

                            {/* Deployment journey timeline */}
                            {/* This will contains a component of timeline */}
                            <DeploymentTimeline />
                        </div>
                    </section>

                    {/* Aside right */}
                    <aside className='aside-right'></aside>
                </div>
            </main>

            {/* The Footer */}
            {/* The Footer component was imported */}
            <footer className='introduction-footer'>
                <IntroductionFooter />
            </footer>
        </>
    )
};