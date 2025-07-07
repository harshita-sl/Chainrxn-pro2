import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} MyBlockchain. All rights reserved.</p>
                <div className="flex gap-4">
                <div className="footer-links">
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms-of-service">Terms of Service</a>
                    <a href="/contact">Contact Us<br></br></a>
                    <span>Made by ☻</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;