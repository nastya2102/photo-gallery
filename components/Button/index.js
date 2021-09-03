import styles from './Button.module.scss';

const Button = ({onClick, children}) => (
    <button className={styles.button} onClick={onClick}>
        {children}
    </button>
);

export default Button;