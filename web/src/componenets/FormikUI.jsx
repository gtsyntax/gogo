import { useField } from "formik"

export function TextInput({label, ...props}) {
    const [field, meta] = useField(props);
    return (
        <div className="flex flex-col">
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="border p-2" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="text-red-400">{meta.error}</div>
            ) : null}
        </div>
    )
}