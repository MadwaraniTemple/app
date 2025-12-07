import React from 'react';
import classes from './Action.module.css';
import { useNavigate } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

const Action = (props) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleJyotiKalashClick = () => {
        navigate({ to: '/JyotiKalash' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDonationClick = () => {
        // Add donation link/logic here
        alert(t('action.donateComingSoon'));
    };

    return (
        <div className={classes.body} id="Action">
            {/* Organization Header */}
            <div className={classes.headerSection}>
                <h1 className={classes.orgName}>{t('action.orgName')}</h1>
            </div>

            {/* Address Section */}
            <div className={classes.addressSection}>
                <p className={classes.address}>
                    {t('action.address')}
                    <br />
                    {t('action.registrationNo')}
                </p>
            </div>

            {/* Action Buttons Section */}
            <div className={classes.buttonsSection}>
                <button className={classes.actionButton} onClick={handleDonationClick}>
                    {t('action.donateButton')}
                </button>
                <button className={classes.actionButton} onClick={handleJyotiKalashClick}>
                    {t('action.jyotiKalashButton')}
                </button>
            </div>
        </div>
    );
};

export default Action;
