import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ResetViewButton from './ResetViewButton';

const OsloMap = () => {
    const osloPosition = [59.9139, 10.7522];

    return (
        <MapContainer
            center={osloPosition}
            zoom={12}
            minZoom={6}
            maxZoom={18}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
        >
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={osloPosition}>
                <Popup>
                Oslo, Norway
                </Popup>
            </Marker>

            <ResetViewButton center={osloPosition} zoom={12} />
        </MapContainer>
    );
};

export default OsloMap;
