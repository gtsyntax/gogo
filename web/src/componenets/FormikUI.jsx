import { useField } from "formik"

export function TextInput({label, ...props}) {
    const [field, meta] = useField(props)
    return (
        <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor={props.id || props.name}>{label}</label>
            <input className="border py-4 px-8 rounded-full" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="text-red-400">{meta.error}</div>
            ) : null}
        </div>
    )
}

export function SelectInput({label, ...props}) {
    const [field, meta] = useField(props)
    return (
        <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} className="border py-4 px-8 rounded-full"/>
            {meta.touched && meta.error ? (
                <div className="text-red-400">{meta.error}</div>
            ) : null}
        </div>
    )
}