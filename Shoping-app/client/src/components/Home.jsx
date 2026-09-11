import { useState } from 'react';
import Saman from './Saman';
import { initialProducts } from '../data/products';

const Home = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Books', 'Electronics', 'Accessories'];

  const filteredProducts = initialProducts.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="home">
      <div className="catalog-header">
        <div className="catalog-title-section">
          <h2>Product Catalog</h2>
          <p className="catalog-subtitle">Explore learning materials, tech items, and study accessories</p>
        </div>

        <div className="catalog-controls">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search catalog items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button type="button" className="clear-search" onClick={() => setSearchTerm('')}>
                ✕
              </button>
            )}
          </div>

          <div className="category-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="no-results">
          <h3>No items found</h3>
          <p>Try searching for a different keyword or reset your filter.</p>
          <button
            type="button"
            className="reset-btn"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All');
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="items-grid">
          {filteredProducts.map((item) => (
            <Saman
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              category={item.category}
              rating={item.rating}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default Home;