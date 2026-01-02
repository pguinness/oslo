import { useMap } from 'react-leaflet';

const ResetViewButton = ({ center, zoom }) => {
    const map = useMap();

    const resetView = () => {
        map.setView(center, zoom, { animate: true });
    };

    return (
        <button className="map-reset" onClick={resetView}>
            Reset view
        </button>
    );
};

export default ResetViewButton;
