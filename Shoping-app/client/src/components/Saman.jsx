import { useState } from 'react';

const Saman = ({ id, title, price, image, category, rating, onAddToCart }) => {
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleAdd = () => {
    onAddToCart({ id, title, price, image, category });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="items">
      <div className="item-image-wrapper">
        {!imgError ? (
          <img
            src={image}
            alt={title}
            className="item-image"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="image-fallback">
            <span>{title ? title.slice(0, 2).toUpperCase() : 'PR'}</span>
          </div>
        )}
        {category && <span className="item-category-tag">{category}</span>}
      </div>

      <div className="item-details">
        <h3 className="item-title">{title}</h3>
        {rating && (
          <div className="item-rating">
            <span className="star">★</span>
            <span className="rating-num">{rating}</span>
          </div>
        )}

        <div className="item-footer">
          <div className="item-price">
            <span className="currency">₹</span>
            <span className="amount">{price ? price.toLocaleString('en-IN') : '0'}</span>
          </div>

          <button
            type="button"
            className={`add-btn ${added ? 'added' : ''}`}
            onClick={handleAdd}
          >
            {added ? 'Added ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Saman;