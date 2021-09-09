import React from 'react'
import styles from '../styles/Contact.module.css'
import scss_styles from '../styles/Contact.module.scss'


function Contact() {
    return (
        <div>
            <h2>Contact Page</h2>
            <div className={styles.highlight}>Moudle Level CSS</div>
            <div className={scss_styles.scss_highlight}>SASS Moudle Level CSS</div>
        </div>
    )
}

export default Contact
