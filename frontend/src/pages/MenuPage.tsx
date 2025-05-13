import React, { useState } from 'react';
import { useMenu } from '../context/MenuContext';

const categories = [
  { id: 'all', name: 'All Menu' },
  { id: 'starters', name: 'Starters' },
  { id: 'mains', name: 'Main Courses' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'wines', name: 'Wines' },
];

const dietaryFilters = [
  { id: 'vegetarian', label: 'Vegetarian' },
  { id: 'vegan', label: 'Vegan' },
  { id: 'gluten-free', label: 'Gluten Free' },
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filters, setFilters] = useState<string[]>([]);
  const { menuItems, isLoading } = useMenu();

  const toggleFilter = (filterId: string) => {
    setFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId) 
        : [...prev, filterId]
    );
  };

  // Filter menu items based on active category and dietary filters
  const filteredItems = menuItems
    .filter(item => activeCategory === 'all' || item.category === activeCategory)
    .filter(item => {
      if (filters.length === 0) return true;
      return filters.every(filter => item.dietaryTags?.includes(filter));
    });

  return (
    <div className="min-h-screen pt-24 pb-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Our Menu</h1>
        <p className="text-center text-neutral-600 mb-12">
          Discover our carefully crafted culinary creations
        </p>

        {/* Category navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 mx-2 mb-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-[#7D0633] text-white'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Dietary filters */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="flex items-center text-neutral-600 mr-2 mb-2">
            <span>Dietary:</span>
          </div>
          {dietaryFilters.map(filter => (
            <button
              key={filter.id}
              className={`px-3 py-1 mx-1 mb-2 text-sm rounded-full border transition-colors ${
                filters.includes(filter.id)
                  ? 'bg-[#7D0633] text-white border-[#7D0633]'
                  : 'bg-white text-neutral-700 border-neutral-300 hover:border-[#7D0633]'
              }`}
              onClick={() => toggleFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p>Loading menu items...</p>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            {/* Starters */}
            {(activeCategory === 'all' || activeCategory === 'starters') && 
              filteredItems.some(item => item.category === 'starters') && (
                <div className="mb-16">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-[#7D0633]">Starters</h2>
                    <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
                  </div>
                  <div className="divide-y">
                    {filteredItems
                      .filter(item => item.category === 'starters')
                      .map(item => (
                        <div key={item.id} className="py-6 flex flex-col md:flex-row items-start md:items-center">
                          <div className="flex-grow">
                            <div className="flex items-center mb-2">
                              <h3 className="text-xl font-bold">{item.name}</h3>
                              <div className="flex ml-3">
                                {item.dietaryTags?.includes('vegetarian') && (
                                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-1">V</span>
                                )}
                                {item.dietaryTags?.includes('vegan') && (
                                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-1">VG</span>
                                )}
                                {item.dietaryTags?.includes('gluten-free') && (
                                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">GF</span>
                                )}
                              </div>
                            </div>
                            <p className="text-neutral-600 mb-2">{item.description}</p>
                          </div>
                          <div className="text-[#7D0633] font-bold text-xl">
                            €{item.price.toFixed(2)}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}

            {/* Main Courses */}
            {(activeCategory === 'all' || activeCategory === 'mains') && 
              filteredItems.some(item => item.category === 'mains') && (
                <div className="mb-16">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-[#7D0633]">Main Courses</h2>
                    <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
                  </div>
                  <div className="divide-y">
                    {filteredItems
                      .filter(item => item.category === 'mains')
                      .map(item => (
                        <div key={item.id} className="py-6 flex flex-col md:flex-row items-start md:items-center">
                          <div className="flex-grow">
                            <div className="flex items-center mb-2">
                              <h3 className="text-xl font-bold">{item.name}</h3>
                              <div className="flex ml-3">
                                {item.dietaryTags?.includes('vegetarian') && (
                                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-1">V</span>
                                )}
                                {item.dietaryTags?.includes('vegan') && (
                                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-1">VG</span>
                                )}
                                {item.dietaryTags?.includes('gluten-free') && (
                                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">GF</span>
                                )}
                              </div>
                            </div>
                            <p className="text-neutral-600 mb-2">{item.description}</p>
                          </div>
                          <div className="text-[#7D0633] font-bold text-xl">
                            €{item.price.toFixed(2)}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}

            {/* Desserts */}
            {(activeCategory === 'all' || activeCategory === 'desserts') && 
              filteredItems.some(item => item.category === 'desserts') && (
                <div className="mb-16">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-[#7D0633]">Desserts</h2>
                    <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
                  </div>
                  <div className="divide-y">
                    {filteredItems
                      .filter(item => item.category === 'desserts')
                      .map(item => (
                        <div key={item.id} className="py-6 flex flex-col md:flex-row items-start md:items-center">
                          <div className="flex-grow">
                            <div className="flex items-center mb-2">
                              <h3 className="text-xl font-bold">{item.name}</h3>
                              <div className="flex ml-3">
                                {item.dietaryTags?.includes('vegetarian') && (
                                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-1">V</span>
                                )}
                                {item.dietaryTags?.includes('vegan') && (
                                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-1">VG</span>
                                )}
                                {item.dietaryTags?.includes('gluten-free') && (
                                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">GF</span>
                                )}
                              </div>
                            </div>
                            <p className="text-neutral-600 mb-2">{item.description}</p>
                          </div>
                          <div className="text-[#7D0633] font-bold text-xl">
                            €{item.price.toFixed(2)}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}

            {/* Wines */}
            {(activeCategory === 'all' || activeCategory === 'wines') && 
              filteredItems.some(item => item.category === 'wines') && (
                <div>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-[#7D0633]">Wines</h2>
                    <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
                  </div>
                  <div className="divide-y">
                    {filteredItems
                      .filter(item => item.category === 'wines')
                      .map(item => (
                        <div key={item.id} className="py-6 flex flex-col md:flex-row items-start md:items-center">
                          <div className="flex-grow">
                            <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                            <p className="text-neutral-500 text-sm mb-2">{item.origin}</p>
                            <p className="text-neutral-600">{item.description}</p>
                          </div>
                          <div className="flex flex-col items-end mt-3 md:mt-0">
                            <div className="text-[#7D0633] font-bold text-xl">
                              €{item.price.toFixed(2)}
                            </div>
                            <span className="text-sm text-neutral-500">Glass: €{(item.price / 5).toFixed(2)}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
              
            {filteredItems.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <p className="text-neutral-600">No menu items match your filters.</p>
                <button 
                  onClick={() => {
                    setFilters([]);
                    setActiveCategory('all');
                  }}
                  className="mt-4 text-[#7D0633] hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;