import React, { useState } from 'react';
import styles from './Burger.module.css';

let burgerClass = styles.burger;
const Burger = ({mobileNavStatusHandler}) => {

    let [burgerClass, handleBurgerClass] = useState(styles.burger);

    const handleBurger = () => {
        console.log(burgerClass);
        handleBurgerClass(burgerClass === styles.burger ? burgerClass = styles.activeBurger : burgerClass = styles.burger);
    }
    if(burgerClass === styles.burger) {
        return (
            <div className={styles.burger} onClick={() => {handleBurger(); mobileNavStatusHandler()}}>
            </div>
        );
    } else {
        return (
            <div className={styles.activeBurger} onClick={() => {handleBurger(); mobileNavStatusHandler()}}>
            </div>
        );
    }
}

export default Burger;