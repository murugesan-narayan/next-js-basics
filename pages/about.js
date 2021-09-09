import React from 'react'
import styles from '../styles/About.module.css'
import scss_styles from '../styles/About.module.scss'
import styled from 'styled-components'

const Title = styled.h6`
    font-size: 50px;
    color: ${({theme}) => theme.colors.primary}
`

function About() {
    return (
        <div>
            <h2>About Page</h2>
            <button className='btn btn-primary'>Primary</button>
            <button className='btn btn-success'>Success</button>
            <div className={styles.highlight}>Moudle Level CSS</div>
            <div className={scss_styles.scss_highlight}>SASS Moudle Level CSS</div>
            <Title>Sytled Component using Theme</Title>
        </div>
    )
}

export default About
