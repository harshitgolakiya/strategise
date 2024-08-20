import { FC } from 'react';

interface IconXProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}

const IconX: FC<IconXProps> = ({ className, fill = false, duotone = true }) => {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3L3 9" stroke="#0E1726" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 3L9 9" stroke="#0E1726" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
    );
};

export default IconX;
