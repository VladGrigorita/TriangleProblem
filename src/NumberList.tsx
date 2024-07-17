import React from 'react';

interface NumberListProps {
    maxNumber: number;
}

const NumberList: React.FC<NumberListProps> = ({ maxNumber }) => {
    const numbers = Array.from({ length: maxNumber }, (_, i) => i + 1);

    return (
        <div>
            {numbers.map((num) => (
                <span key={num}>{num} </span>
            ))}
        </div>
    );
};

export default NumberList;
