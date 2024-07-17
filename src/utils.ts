export const generateNumbers = (maxNumber: number): number[] => {
    return Array.from({ length: maxNumber }, (_, i) => i + 1);
};

export const calculateTriangleArea = (height: number, width: number): number => {
    return (height * width) / 2;
};
