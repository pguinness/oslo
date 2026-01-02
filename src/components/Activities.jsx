import activities from '../data/activitites.json';
import ActivityCard from './ActivityCard';

import './styles/Activities.css';

const Activities = ({ onAdd, selected }) => {
    return (
        <div className="activities-grid">
            {activities.map(act => {
                const isSelected = selected.some(a => a.id === act.id);

                return (
                    <ActivityCard
                        key={act.id}
                        activity={act}
                        onAdd={onAdd}
                        isSelected={isSelected}
                    />
                );
            })}
        </div>
    );
};

export default Activities;
