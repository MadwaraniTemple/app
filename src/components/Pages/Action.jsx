import React from 'react';
import classes from './Action.module.css';
import { useNavigate } from '@tanstack/react-router';

const Action = (props) => {
    const navigate = useNavigate();

    const handleJyotiKalashClick = () => {
        navigate({ to: '/JyotiKalash' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDonationClick = () => {
        // Add donation link/logic here
        alert('Donation feature coming soon!');
    };

    return (
        <div className={classes.body} id="Action">
            {/* Organization Header */}
            <div className={classes.headerSection}>
                <h1 className={classes.orgName}>Jay Maa Madwarani Seva Samiti (Kalmi Ped)</h1>
            </div>

            {/* Address Section */}
            <div className={classes.addressSection}>
                <p className={classes.address}>
                    Uphill, Jheenka Mahora (Madwarani), Distt-Korba, Chhattisgarh, India.
                    <br />
                    Registration No. 13377
                </p>
            </div>

            {/* Action Buttons Section */}
            <div className={classes.buttonsSection}>
                <button className={classes.actionButton} onClick={handleDonationClick}>
                    💝 Donate Now
                </button>
                <button className={classes.actionButton} onClick={handleJyotiKalashClick}>
                    🕯️ Jyoti Kalash Registration
                </button>
            </div>
        </div>
    );
};

export default Action;
