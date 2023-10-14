import React, { useState, useRef, useEffect } from 'react';
import Paper from '@mui/material/Paper';

const InteractivePaper = ({children, rotationAmount, sx}) => {
    const [style, setStyle] = useState({});
    const paperRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = paperRef.current.getBoundingClientRect();
        const xCenter = (rect.left + rect.right) / 2;
        const yCenter = (rect.top + rect.bottom) / 2;

        const isLeft = e.clientX < xCenter;
        const isRight = !isLeft;
        const isTop = e.clientY < yCenter;
        const isBottom = !isTop;

        const rotationY = isLeft ? rotationAmount : isRight ? -rotationAmount : 0;
        const rotationX = isTop ? -rotationAmount : isBottom ? rotationAmount : 0;

        setStyle({
            transform: `perspective(100px) rotateY(${rotationY}deg) rotateX(${rotationX}deg)`,
            transition: 'transform 0.3s'
        });
    };

    const resetStyle = () => {
        setStyle({
            transform: 'rotateY(0) rotateX(0)',
            transition: 'transform 0.3s',
        });
    };

    useEffect(() => {
        const paperElement = paperRef.current;
        paperElement.addEventListener('mousemove', handleMouseMove);
        paperElement.addEventListener('mouseleave', resetStyle);

        return () => {
            paperElement.removeEventListener('mousemove', handleMouseMove);
            paperElement.removeEventListener('mouseleave', resetStyle);
        };
    }, []);

    return <Paper
        ref={paperRef}
        sx={{
            borderRadius: 0,
            borderWidth: 2,
            ...sx
        }}
        className={'bg-white dark:bg-black border-primary-100 dark:border-primary-900'}
        style={style}
    >
        {children}
    </Paper>;
};

export default InteractivePaper;
