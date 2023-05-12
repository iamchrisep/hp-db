'use client';

import React, { useContext } from 'react';
import useMousePosition from './UseMousePosition';
import { MouseContext } from '@/context/mouseContext';

const Cursor: React.FC = () => {
    const { cursorType } = useContext(MouseContext);

    const { x, y } = useMousePosition();
    return (
        <div>
            <div
                className={`circle ${cursorType}`}
                style={{ left: `${x}px`, top: `${y}px` }}
            />
            <div
                className={`circle ${cursorType}`}
                style={{ left: `${x}px`, top: `${y}px` }}
            />
            <div
                className={`circle ${cursorType}`}
                style={{ left: `${x}px`, top: `${y}px` }}
            />
            <div
                className={`dot ${cursorType}`}
                style={{ left: `${x}px`, top: `${y}px` }}
            />
        </div>
    );
};

export default Cursor;
