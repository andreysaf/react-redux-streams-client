import React from 'react';
import Modal from '../Modal';

const SteamDelete = () => {
    const actions = (
        <div>
            <button className="ui red button">Delete</button>
            <button className="ui button">Cancel</button>
        </div>
    );

    return (
        <div>
            SteamDelete
            <Modal 
                title="Delete Stream" 
                content="Are you sure you want to delete this stream?"
                actions={actions}
            />
        </div>
    );
};

export default SteamDelete;