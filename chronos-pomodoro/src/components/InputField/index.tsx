type InputFieldProps = {
    id: string;
    label: string;
} & React.ComponentProps<'input'>

export function InputField({ id, type, label, ...rest }: InputFieldProps) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} {...rest}/>
        </>
    );
}