import { useParams } from "react-router-dom"

export default function CategoryDetail() {
    const params = useParams();
    console.log(params)
    return (
        <main>
            detail page
        </main>
    )
}