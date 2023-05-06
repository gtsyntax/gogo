import { Link } from "@remix-run/react";
export default function PartnerSignUp() {
  return (
    <main className="h-[400px] flex justify-center items-center">
      <div className="container mx-auto flex justify-around items-center h-40 border">
        <div>
          <p className="text-brand-primary text-2xl font-bold">Are you a restaurant owner?</p>
          <p className="text-gray-400">Our platform offers a seamless way for you to manage and grow your online presence and reach more customers than ever before.</p>
        </div>
        <Link to="/partner/register" className="bg-brand-yellow text-brand-secondary py-4 px-12 rounded-md">Get Started</Link>
      </div>
    </main>
  )
}
