import styles from './Input.module.scss';

const Input = ({value, handleChangeInput}) => (
    <input
        type={'text'}
        className={styles.input}
        value={value}
        onChange={(e) => handleChangeInput(e.target.value)}
    />
)

export default Input;
