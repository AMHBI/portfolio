import React from 'react';
import { Highlight, color } from '@chakra-ui/react';
import styles from "../Styles/Landing.module.css";
import avatar from "../assets/png/Avatar.png"

const Landing = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={avatar} alt='Ali Mohebi'/>
            </div>
            <div className={styles.textContainer}>
                <span>
            <Highlight query='Ali Mohebi'
                 styles={{ px: '10', py: '3', rounded: '50', bg: '#08203e', color:'white'}}>
                    Hi my name is 
                    Ali Mohebi  
                    and i'am a
                    </Highlight>
                     </span>
                <h3>Front-End Developer</h3>
                <span>I am very glad that you are visiting this website </span>
                <p></p>
            </div>
        </div>
    );
};

export default Landing;