export default function RestaurantCard ({ name, cuisine, rating, image }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <img src={image} alt={name} className="w-full mb-4 rounded-lg" />
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-700 mb-2">{cuisine}</p>
        <div className="flex items-center">
          <span className="text-yellow-500 mr-1">&#9733;</span>
          <span className="text-gray-700">{rating}</span>
        </div>
      </div>
    );
};