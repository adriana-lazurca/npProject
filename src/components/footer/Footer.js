import React from 'react';
import './Footer.css';

function Footer() {
    const date = new Date();
    const hours = date.getHours();
    const styles = {};

    //console.log(hours)

    let timeOfDay;

    if (hours > 0 && hours < 13) {
        timeOfDay = 'Good morning!'
        styles.color='#e9d8da'
    }
    else if (hours < 19) {
        timeOfDay = 'Good afternoon!'
        styles.color='#ffc107'
    }
    else {
        timeOfDay = 'Good evening!'
        styles.color='#1e466e'
    }

    return (
        <footer className="footer text-center">
            <p style={styles}>{timeOfDay}</p>
        </footer>
    )
}

export default Footer;