import React from 'react';
export function Header(props) {
    return (
        <header>
            <div className="title">{props.title}</div>
        </header>
    );
}