import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

export default function CustomerHome() {
    const { user: currentUser } = useSelector((state) => state.auth)

    if (!currentUser) {
        return <Navigate to="/" />
    }

    return (
        <main>
            <h1>{currentUser.username}</h1>
            <p>{currentUser.id}</p>
        </main>
    )
}