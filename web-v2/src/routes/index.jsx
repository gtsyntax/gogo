import { Link } from "react-router-dom";

export default function Index() {
    return (
        <main>
            <section className="h-[450px] bg-brand-primary">
                <div className="container mx-auto h-full flex items-center">
                    <div>
                        <h1 className="text-6xl font-bold">Order food for delivery</h1>
                        <p className="p-2 text-xl">Whatever you want from local restaurants, brought right to your door.</p>
                        <form className="flex gap-2">
                            <input type="text" placeholder="Enter delivery address" className="p-4 w-3/4"/>
                            <button className="w-32 bg-black text-white">Find Food</button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="py-4">
                <div className="container mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col">
                        <img 
                            className="h-[200px] object-cover"
                            src="https://images.unsplash.com/photo-1681579289908-194848111a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                        <h1 className="text-2xl font-bold mt-2">Feed your employees</h1>
                        <p><Link to={`#`}>Create a business account</Link></p>
                    </div>

                    <div className="flex flex-col">
                        <img
                            className="h-[200px] object-cover" 
                            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                        <h1 className="text-2xl font-bold mt-2">Become a partner</h1>
                        <p><Link to={`#`}>Add your restaurant</Link></p>
                    </div>

                    <div className="flex flex-col">
                        <img
                            className="h-[200px] object-cover" 
                            src="https://images.unsplash.com/photo-1548695607-9c73430ba065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaXZlcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
                        <h1 className="text-2xl font-bold mt-2">Deliver with gogo</h1>
                        <p><Link to={`#`}>Sign up to deliver</Link></p>
                    </div>
                </div>
            </section>

            <section className="border py-4">
                <div className="container mx-auto">
                    <p>&copy; 2023 Gogo Technologies Inc.</p>
                </div>
            </section>
        </main>
    )
}