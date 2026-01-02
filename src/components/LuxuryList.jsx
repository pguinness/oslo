import luxury from '../data/luxury.json';
import LuxuryItem from './LuxuryItem';

import './styles/LuxuryList.css';

const LuxuryList = () => {
    return (
        <div className="luxury-list">
            {luxury.map((item, index) => (
                <LuxuryItem
                    key={item.id}
                    item={item}
                    reverse={index % 2 !== 0}
                />
            ))}
        </div>
    );
};

export default LuxuryList;
