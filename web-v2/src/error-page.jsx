import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError()
    console.log(error)

    return (
        <div className="min-h-screen border flex flex-col justify-center items-center">
            <h1 className="text-4xl">Oops!</h1>
            <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
            <p className="text-xl">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}