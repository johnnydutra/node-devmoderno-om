import styles from './styles.module.css';

type InputFieldProps = {
    id: string;
    label: string;
} & React.ComponentProps<'input'>

export function InputField({ id, type, label, ...props }: InputFieldProps) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input className={styles.input} type={type} id={id} {...props}/>
        </>
    );
}