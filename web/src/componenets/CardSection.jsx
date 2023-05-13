import { Link } from "react-router-dom";

export default function CardSection() {
    return (
        <main className="container mx-auto flex justify-between my-8">
            <div>
                <img src="https://placehold.co/400x200/png" />
                <h1 className="text-2xl font-bold mt-2">Feed your employees</h1>
                <Link to="#">Create a business account</Link>
            </div>

            <div>
                <img src="https://placehold.co/400x200/png" />
                <h1 className="text-2xl font-bold mt-2">Your restaurant, delivered</h1>
                <Link to="/partner/register">Add your restaurant</Link>
            </div>

            <div>
                <img src="https://placehold.co/400x200/png" />
                <h1 className="text-2xl font-bold mt-2">Deliver with Gogo</h1>
                <Link to="#">Sign up to deliver</Link>
            </div>
        </main>
    )
}