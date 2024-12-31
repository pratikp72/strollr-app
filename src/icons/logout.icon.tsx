import React from "react";
import '@/styles/Card.css'
import { IconProps } from "./dashboard.icon";


const LogoutIcon: React.FC<IconProps> = ({ color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="icon">
            <path d="M23.2969 12.7969L15.4219 20.6719C14.7188 21.375 13.5 20.8828 13.5 19.875V15.375H7.125C6.50156 15.375 6 14.8734 6 14.25V9.75C6 9.12656 6.50156 8.625 7.125 8.625H13.5V4.125C13.5 3.12188 14.7141 2.625 15.4219 3.32813L23.2969 11.2031C23.7328 11.6438 23.7328 12.3563 23.2969 12.7969ZM9 20.4375V18.5625C9 18.2531 8.74687 18 8.4375 18H4.5C3.67031 18 3 17.3297 3 16.5V7.5C3 6.67031 3.67031 6 4.5 6H8.4375C8.74687 6 9 5.74688 9 5.4375V3.5625C9 3.25313 8.74687 3 8.4375 3H4.5C2.01562 3 0 5.01563 0 7.5V16.5C0 18.9844 2.01562 21 4.5 21H8.4375C8.74687 21 9 20.7469 9 20.4375Z" fill={color} />
        </svg>

    );
};

export default LogoutIcon;
