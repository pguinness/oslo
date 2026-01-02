import { useRef, useState } from "react";

import "./styles/SoundGate.css";

const SoundGate = () => {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const toggleSound = () => {
        if (!playing) {
            audioRef.current.volume = 0.25;
            audioRef.current.play();
            setPlaying(true);
        } else {
            audioRef.current.pause();
            audioRef.current.currentTime = 0; // reset song
            setPlaying(false);
        }
    };

    const handleEnded = () => {
        setPlaying(false);
        audioRef.current.currentTime = 0;
    };

    return (
        <section className="sound-gate">
            <button className="sound-button" onClick={toggleSound}>
                {playing ? "Sound enabled" : "Enable sound"}
                &nbsp;
                {playing ? <i className="bi bi-stop-fill"></i> : <i className="bi bi-play-fill"></i>}
            </button>

            <audio ref={audioRef} onEnded={handleEnded}>
                <source src={`${process.env.PUBLIC_URL}/audio/hurt-you-instrumental.mp3`} type="audio/mpeg" />
            </audio>
        </section>
    );
};

export default SoundGate;
