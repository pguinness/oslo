import './styles/ActivityCard.css';

const ActivityCard = ({ activity, onAdd, isSelected }) => {
    return (
        <article className="activity-card">
            <img
                src={`${process.env.PUBLIC_URL}/img/activities/${activity.id}.jpg`}
                alt={activity.name}
            />
            <div className="activity-content">
                <h3>{activity.name}</h3>
                <p>{activity.description}</p>

                <button
                    onClick={() => onAdd(activity)}
                    disabled={isSelected}
                    className={isSelected ? 'added' : ''}
                >
                    {isSelected ? 'Added' : 'Add to plan'}
                </button>
            </div>
        </article>
    );
};

export default ActivityCard;
