import Nav from '../components/Nav';
import Footer from '../components/Footer';
import OsloMap from '../components/OsloMap';

import './styles/Map.css';

// fix markers bug
import L from 'leaflet';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
});

const Map = () => {
    return (
        <>
            <Nav />
            <div className="container">
                <section className="map-section">
                    <h1>Map of Oslo</h1>
                    <p>
                        Powered by <a href="https://www.openstreetmap.org" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> and <a href="https://leafletjs.com" target="_blank" rel="noopener noreferrer">Leaflet</a>.
                    </p>
                    <div className="map-wrapper">
                        <OsloMap />
                    </div>
                </section>
            </div>
            <Footer variant="light" />
        </>
    );
};

export default Map;
