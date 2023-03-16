import React from 'react';

import './style.css';

export default function Wrapper(props) {
    return (
        <main>
            {props.children}
        </main>
    );
}