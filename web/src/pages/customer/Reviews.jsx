import { Link } from 'react-router-dom';

const reviews = [
  { id: 1, date: '2023-05-08', rating: 4, comment: 'Great product!' },
  { id: 2, date: '2023-05-05', rating: 3, comment: 'Could be better.' },
  { id: 3, date: '2023-04-30', rating: 5, comment: 'Love it!' },
];

export default function CustomerReviews() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4 bg-brand-primary hover:bg-brand-secondary transition-colors text-white rounded-md p-3 p-4 rounded-md ">
        Reviews
      </h1>
      <ul className="border-t border-gray-200 divide-y divide-gray-200">
        {reviews.map((review) => (
          <li key={review.id} className="py-4 flex items-center justify-between">
            <div className="flex-1">
              <div className="text-lg font-medium text-gray-900">Review #{review.id}</div>
              <div className="text-gray-500">Date: {review.date}</div>
              <div className="text-gray-500">Rating: {review.rating}</div>
              <div className="text-gray-500">Comment: {review.comment}</div>
            </div>
            <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
