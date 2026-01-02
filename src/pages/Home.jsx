import { useState } from 'react';

import Nav from '../components/Nav';
import Activities from '../components/Activities';
import ActivititesCart from '../components/ActivitiesCart';
import LuxuryList from '../components/LuxuryList';
import SoundGate from '../components/SoundGate';
import Footer from '../components/Footer';
import useDayNightScroll from "../hooks/useDayNightScroll";

import './styles/Home.css';

const Home = () => {
    const triggerRef = useDayNightScroll();
    const [selectedActivities, setSelectedActivities] = useState([]);

    const addActivity = (activity) => {
        setSelectedActivities(prev => {
            // the activity already exists
            if (prev.find(a => a.id === activity.id)) return prev;
            return [...prev, activity]; // add activity (if new)
        });
    };

    const removeActivity = (id) => {
        setSelectedActivities(prev =>
            prev.filter(activity => activity.id !== id)
        );
    };

    return (
        <>
            <div className="image-container">
                <div className="overlay-content">
                    <Nav />
                    <div className="title">
                        <h1>Oslo</h1>
                        <p>Where Nature Meets Nordic Luxury</p>
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: '5rem' }}>
                <section className="nature">
                    <h2>Nature</h2>
                    <div className="text-image">
                        <div className="ti-text">
                            <p>In Oslo, nature is never distant.</p>
                            <p>Forests breathe at the edge of the city, fjords reflect the changing sky, and silence becomes part of the landscape. Here, movement slows, air feels clearer, and time stretches gently.</p>
                            <p>This is a city shaped not only by architecture, but by water, wood, and light.</p>
                        </div>
                        <div className="ti-image">
                            <img src={`${process.env.PUBLIC_URL}/img/nature.jpg`} alt="Nature" />
                        </div>
                    </div>
                </section>

                <section className="activities">
                    <h2>Build Your Experience</h2>
                    <div className="activities-layout">
                        <Activities
                            onAdd={addActivity}
                            selected={selectedActivities}
                        />
                        <ActivititesCart
                            items={selectedActivities}
                            onRemove={removeActivity}
                        />
                    </div>
                </section>
            </div>

            <section className="transition" aria-hidden="true">
                <div className="dark-boundary" aria-hidden="true" ref={triggerRef}></div>
            </section>

            <div className="dark">
                <SoundGate />

                <div className="container">
                    <section className="after-dark">
                        <h2>After Dark</h2>
                        <p>Quiet hotels, late dinners, and the city reflected on water.</p>
                        <img src={`${process.env.PUBLIC_URL}/img/after-dark.jpg`} alt="After Dark" />
                        <LuxuryList />
                    </section>
                </div>
                
                <Footer variant="dark" />
            </div>
        </>
    );
};

export default Home;
