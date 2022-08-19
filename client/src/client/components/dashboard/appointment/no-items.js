import React from 'react';

const NoItems = () => {
    return (
        <div className="NoItem">
            <h2 className="NoItem-text-primary">
                No Appointments booked
            </h2>
            <h3 className="NoItem-text-secondary">
                <span>
                    no appointment have been booked 
                </span>
                <span>
                    yet, please check back later.
                </span>
            </h3>
        </div>
    );
}

export default NoItems;
