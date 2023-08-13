import React from 'react';
import styles from "../Styles/Card.module.css";


const Card = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.imgWrapper}>
                <img src={props.img} alt='project'/>
            </div>

            <div className={styles.textWrapper}>
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
                <button>
                    <a href={props.url}>Visit {props.title}</a>
                </button>
            </div>
        </div>
    );
};

export default Card;