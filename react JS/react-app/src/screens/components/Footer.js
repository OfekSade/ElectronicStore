import React from 'react';
import './Footer.css';


export default function Footer() {
    return (
        <footer className="bg-dark text-center text-white py-3">
        <p>&copy; {new Date().getFullYear()} ElectronicStroe.co</p>
        <a href="https://github.com/OfekSade?tab=repositories" target="_blank" rel="noreferrer">
        <img src="https://i.pinimg.com/564x/9b/21/22/9b212265fa5d36694df8db3f453a99d8.jpg" alt="View on GitHub" width="30" height="30" />
        </a>
        </footer>
     );
}