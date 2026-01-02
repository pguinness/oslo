import { useState } from "react";

import './styles/ActivitiesCart.css';

const ActivitiesCart = ({ items, onRemove }) => {
    const [removingId, setRemovingId] = useState(null);

    const handleRemove = (id) => {
        setRemovingId(id);

        // match animation duration (see CSS)
        setTimeout(() => {
            onRemove(id);
            setRemovingId(null);
        }, 250);
    };

    return (
        <aside className="cart">
            <h4>My Oslo Plan</h4>

            {items.length === 0 ? (
                <li className="cart-item cart-empty">
                    <span>No activities selected yet.</span>
                    <button className="remove ghost" aria-hidden />
                </li>
            ) : (
                <ul className="cart-items">
                    {items.map(item => (
                        <li
                            key={item.id}
                            className={`cart-item ${
                                removingId === item.id ? "removing" : ""
                            }`}
                        >
                            <span>{item.name}</span>
                            <button
                                className="remove"
                                onClick={() => handleRemove(item.id)}
                                aria-label={`Remove ${item.name}`}
                            >
                                ✕
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </aside>
    );
};

export default ActivitiesCart;
