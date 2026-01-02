import Nav from '../components/Nav';
import Footer from '../components/Footer';

import './styles/Video.css';

const Video = () => {
    return (
        <>
            <Nav />
            <div className="container">
                <section className="video-section">
                    <h1>Oslo in Motion</h1>
                    <p>
                        A glimpse of the city from the sky by <a href="https://www.youtube.com/@MTI.Aerials" target="_blank" rel="noopener noreferrer">MTI Aerials</a>.
                    </p>
                    <div className="video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/l0lr6MGpMu4?rel=0&modestbranding=1"
                            title="Oslo in Motion"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Video;
