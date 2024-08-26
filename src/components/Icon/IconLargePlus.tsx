import { FC } from 'react';

interface IconPlusProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}

const IconLargePlus: FC<IconPlusProps> = ({ className, fill = false, duotone = true }) => {
    return (
        <svg width="283" height="283" viewBox="0 0 283 283" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5" filter="url(#filter0_d_188_4146)">
                <rect x="130" width="24" height="279" rx="5" fill="#17AB06" />
                <rect x="2" y="152" width="24" height="279" rx="5" transform="rotate(-90 2 152)" fill="#17AB06" />
            </g>
            <defs>
                <filter id="filter0_d_188_4146" x="0" y="0" width="283" height="283" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_188_4146" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_188_4146" result="shape" />
                </filter>
            </defs>
        </svg>
    );
};

export default IconLargePlus;
