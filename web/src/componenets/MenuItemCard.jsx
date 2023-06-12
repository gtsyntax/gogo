export default function MenuItemCard({ name, description, price, image }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <img src={image} alt={name} className="w-full mb-4 rounded-lg" />
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-900 font-medium">&#8378;{price}</span>
          <button className="bg-brand-primary hover:bg-blue-600 text-white px-4 py-2 rounded-md">Add to Cart</button>
        </div>
      </div>
    );
};