export const handleBurger = (burgerClass, setBurgerClass, styles) => {
  setBurgerClass(
    burgerClass === styles.burger
      ? (burgerClass = styles.activeBurger)
      : (burgerClass = styles.burger)
  );
};
