import React from 'react'
import { Link } from 'react-router-dom'

const TopPanel = ({props}) => {
    return (
        <div className="top-panel">
            <h4>top panel</h4>
            <Link to="/cabinet">User cabinet</Link>
        </div>
    )
};

export default TopPanel;
