import React from 'react';
import { assets } from '../assets/assets';

interface ProductRatingProps {
  rating: number;
  totalReviews: number;
}

const ProductRating: React.FC<ProductRatingProps> = ({ rating, totalReviews }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <img
      key={index}
      src={assets.star_icon}
      alt="star"
      className={`w-3.5 ${index < rating ? 'opacity-100' : 'opacity-30'}`}
    />
  ));

  return (
    <div className="flex items-center gap-1 mt-2">
      {stars}
      <p className="pl-2">({totalReviews})</p>
    </div>
  );
};

export default ProductRating; 