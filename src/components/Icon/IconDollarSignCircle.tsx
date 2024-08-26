import { FC } from 'react';

interface IconDollarSignCircleProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
}

const IconDollarSignCircle: FC<IconDollarSignCircleProps> = ({ className, fill = false, duotone = true }) => {
    return (
        <>
            {/* {!fill ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <circle opacity={duotone ? '0.5' : '1'} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path
                        d="M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            ) : (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                    <path
                        opacity={duotone ? '0.5' : '1'}
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M29.3332 15.9998C29.3332 23.3636 23.3636 29.3332 15.9998 29.3332C8.63604 29.3332 2.6665 23.3636 2.6665 15.9998C2.6665 8.63604 8.63604 2.6665 15.9998 2.6665C23.3636 2.6665 29.3332 8.63604 29.3332 15.9998Z"
                        fill="currentColor"
                    />
                    <path
                        d="M17 8C17 7.44772 16.5523 7 16 7C15.4477 7 15 7.44772 15 8V8.42231C12.8261 8.81156 11 10.4448 11 12.6667C11 15.2229 13.417 17 16 17C17.8353 17 19 18.2076 19 19.3333C19 20.459 17.8353 21.6667 16 21.6667C14.1647 21.6667 13 20.459 13 19.3333C13 18.781 12.5523 18.3333 12 18.3333C11.4477 18.3333 11 18.781 11 19.3333C11 21.5552 12.8261 23.1884 15 23.5777V24C15 24.5523 15.4477 25 16 25C16.5523 25 17 24.5523 17 24V23.5777C19.1739 23.1884 21 21.5552 21 19.3333C21 16.7771 18.583 15 16 15C14.1647 15 13 13.7924 13 12.6667C13 11.541 14.1647 10.3333 16 10.3333C17.8353 10.3333 19 11.541 19 12.6667C19 13.219 19.4477 13.6667 20 13.6667C20.5523 13.6667 21 13.219 21 12.6667C21 10.4448 19.1739 8.81156 17 8.42231V8Z"
                        fill={duotone ? 'currentColor' : 'white'}
                    />
                </svg>
            )} */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0.833374V19.1667" stroke="CurrentColor" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M14.1667 4.16663H7.91667C7.14312 4.16663 6.40125 4.47392 5.85427 5.0209C5.30729 5.56788 5 6.30974 5 7.08329C5 7.85684 5.30729 8.59871 5.85427 9.14569C6.40125 9.69267 7.14312 9.99996 7.91667 9.99996H12.0833C12.8569 9.99996 13.5987 10.3073 14.1457 10.8542C14.6927 11.4012 15 12.1431 15 12.9166C15 13.6902 14.6927 14.432 14.1457 14.979C13.5987 15.526 12.8569 15.8333 12.0833 15.8333H5"
                    stroke="CurrentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </>
    );
};
export default IconDollarSignCircle;
