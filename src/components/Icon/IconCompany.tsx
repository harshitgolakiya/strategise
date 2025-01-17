import { FC } from 'react';

interface IconCompany {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}

const IconCompany: FC<IconCompany> = ({ className, fill = false, duotone = true }) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.6663 1.66663H4.99967C4.55765 1.66663 4.13372 1.84222 3.82116 2.15478C3.5086 2.46734 3.33301 2.89127 3.33301 3.33329V16.6666C3.33301 17.1087 3.5086 17.5326 3.82116 17.8451C4.13372 18.1577 4.55765 18.3333 4.99967 18.3333H14.9997C15.4417 18.3333 15.8656 18.1577 16.1782 17.8451C16.4907 17.5326 16.6663 17.1087 16.6663 16.6666V6.66663L11.6663 1.66663Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.667 1.66663V6.66663H16.667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 15V10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.5 12.5H12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
};

export default IconCompany;
