import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomActiveLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                style={
                    { color: match ? "#006097" : "black" }
                }
                // className={match ? ``}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {/* {match && " (active)"} */}
        </div >
    );
};

export default CustomActiveLink;