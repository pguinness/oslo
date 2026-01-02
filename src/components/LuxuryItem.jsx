import './styles/LuxuryItem.css';

const LuxuryItem = ({ item, reverse }) => {
    return (
        <div className={`luxury-item ${reverse ? "reverse" : ""}`}>
            <span className="luxury-note" id="luxury-note-mobile">{item.location}</span>
            
            <div className="luxury-image">
                <img src={"img/luxury/" + item.id + ".jpg"} alt={item.alt} />
            </div>

            <div className="luxury-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="luxury-note" id="luxury-note-desktop">{item.location}</span>
            </div>
        </div>
    );
};

export default LuxuryItem;
