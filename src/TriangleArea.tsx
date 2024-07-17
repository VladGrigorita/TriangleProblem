import React from 'react';

interface TriangleAreaProps {
    height: number;
    width: number;
}

const TriangleArea: React.FC<TriangleAreaProps> = ({ height, width }) => {
    const area = (height * width) / 2;

    return <div>Area of the triangle: {area}</div>;
};

export default TriangleArea;
