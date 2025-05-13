import React, { useState, useEffect } from 'react';
import { Search, Filter, ShoppingBag } from 'lucide-react';
import './Menu.css';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  image: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filters, setFilters] = useState<string[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Sample menu items
  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Carpaccio de Saint-Jacques",
      description: "Fines tranches de Saint-Jacques, huile d'olive citronnée, fleur de sel et poivre noir",
      price: 18.5,
      category: "entrées",
      tags: ["fruits de mer", "sans gluten"],
      image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      name: "Foie Gras Maison",
      description: "Foie gras mi-cuit, chutney de figues et brioche toastée",
      price: 22,
      category: "entrées",
      tags: [],
      image: "https://images.pexels.com/photos/8880181/pexels-photo-8880181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      name: "Velouté de Champignons",
      description: "Crème de champignons sauvages, huile de truffe et croutons à l'ail",
      price: 14,
      category: "entrées",
      tags: ["végétarien"],
      image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      name: "Filet de Bœuf Rossini",
      description: "Filet de bœuf, escalope de foie gras poêlée, sauce périgueux et pommes fondantes",
      price: 36,
      category: "plats",
      tags: [],
      image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 5,
      name: "Risotto aux Truffes",
      description: "Risotto crémeux aux truffes noires, parmesan affiné 24 mois",
      price: 28,
      category: "plats",
      tags: ["végétarien", "sans gluten"],
      image: "https://images.pexels.com/photos/5589050/pexels-photo-5589050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 6,
      name: "Bar en Croûte de Sel",
      description: "Bar entier cuit en croûte de sel, fenouil confit et sauce vierge",
      price: 34,
      category: "plats",
      tags: ["fruits de mer", "sans gluten"],
      image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 7,
      name: "Souffle au Grand Marnier",
      description: "Soufflé aérien parfumé au Grand Marnier, servi avec son coulis d'agrumes",
      price: 14,
      category: "desserts",
      tags: ["végétarien"],
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 8,
      name: "Paris-Brest",
      description: "Pâte à choux croustillante, crème légère au praliné et amandes caramélisées",
      price: 12,
      category: "desserts",
      tags: ["végétarien"],
      image: "https://images.pexels.com/photos/2693447/pexels-photo-2693447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 9,
      name: "Assiette de Fromages Affinés",
      description: "Sélection de fromages affinés, pain aux noix et confiture de cerises noires",
      price: 16,
      category: "desserts",
      tags: ["végétarien"],
      image: "https://images.pexels.com/photos/1927314/pexels-photo-1927314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'entrées', name: 'Entrées' },
    { id: 'plats', name: 'Plats Principaux' },
    { id: 'desserts', name: 'Desserts' }
  ];

  const availableTags = [
    { id: 'végétarien', name: 'Végétarien' },
    { id: 'sans gluten', name: 'Sans Gluten' },
    { id: 'fruits de mer', name: 'Fruits de Mer' }
  ];

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: MenuItem) => {
    setCart(prevCart => {
      const itemInCart = prevCart.find(cartItem => cartItem.id === item.id);
      
      if (itemInCart) {
        return prevCart.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => {
      const itemInCart = prevCart.find(item => item.id === id);
      
      if (itemInCart && itemInCart.quantity === 1) {
        return prevCart.filter(item => item.id !== id);
      } else {
        return prevCart.map(item => 
          item.id === id 
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        );
      }
    });
  };

  const toggleTag = (tag: string) => {
    setFilters(prevFilters => 
      prevFilters.includes(tag)
        ? prevFilters.filter(t => t !== tag)
        : [...prevFilters, tag]
    );
  };

  const filteredMenuItems = menuItems.filter(item => {
    // Filter by search term
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    
    // Filter by tags
    const matchesTags = filters.length === 0 || filters.every(tag => item.tags.includes(tag));
    
    return matchesSearch && matchesCategory && matchesTags;
  });

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="menu-page section">
      <div className="container">
        <h1 className="section-title">Notre Menu</h1>
        <p className="section-subtitle">Découvrez notre sélection de plats gastronomiques</p>

        <div className="menu-controls">
          <div className="search-container">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Rechercher un plat..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="tags-filter">
            <div className="filter-label">
              <Filter size={18} />
              <span>Filtres:</span>
            </div>
            <div className="tags-list">
              {availableTags.map(tag => (
                <button
                  key={tag.id}
                  className={`tag-button ${filters.includes(tag.id) ? 'active' : ''}`}
                  onClick={() => toggleTag(tag.id)}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="categories-nav">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="menu-items">
          {filteredMenuItems.length > 0 ? (
            filteredMenuItems.map(item => (
              <div key={item.id} className="menu-item">
                <div className="menu-item-image" style={{ backgroundImage: `url(${item.image})` }}>
                  {item.tags.length > 0 && (
                    <div className="menu-item-tags">
                      {item.tags.map(tag => (
                        <span key={tag} className="menu-item-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="menu-item-content">
                  <h3 className="menu-item-name">{item.name}</h3>
                  <p className="menu-item-description">{item.description}</p>
                  <div className="menu-item-footer">
                    <span className="menu-item-price">{item.price.toFixed(2)} €</span>
                    <button 
                      className="btn btn-primary btn-sm add-to-cart"
                      onClick={() => addToCart(item)}
                    >
                      Ajouter
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-items-found">
              <p>Aucun plat ne correspond à votre recherche</p>
            </div>
          )}
        </div>

        <button 
          className={`cart-button ${isCartOpen ? 'open' : ''}`}
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          <ShoppingBag size={20} />
          {getTotalItems() > 0 && (
            <span className="cart-count">{getTotalItems()}</span>
          )}
        </button>

        <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
          <div className="cart-header">
            <h3>Votre commande</h3>
            <button 
              className="close-cart"
              onClick={() => setIsCartOpen(false)}
            >
              &times;
            </button>
          </div>

          <div className="cart-items">
            {cart.length > 0 ? (
              cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">{item.price.toFixed(2)} €</p>
                  </div>
                  <div className="cart-item-quantity">
                    <button 
                      className="quantity-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      className="quantity-btn"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-cart">
                <p>Votre panier est vide</p>
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <span className="total-price">{getTotalPrice().toFixed(2)} €</span>
              </div>
              <button className="btn btn-primary checkout-btn">
                Commander
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;