import styles from './Input.module.scss';

const Input = ({formData, handleChangeInput}) => (
    <input
        type={'text'}
        className={styles.input}
        value={formData}
        onChange={(e) => handleChangeInput(e.target.value)}
    />
)

export default Input;
