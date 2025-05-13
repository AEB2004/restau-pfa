import React, { createContext, useContext, useState, useEffect } from 'react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'mains' | 'desserts' | 'wines';
  dietaryTags?: string[];
  origin?: string;  // For wines
}

interface MenuContextType {
  menuItems: MenuItem[];
  isLoading: boolean;
  addMenuItem: (item: Omit<MenuItem, 'id'>) => Promise<MenuItem>;
  updateMenuItem: (id: string, item: Partial<MenuItem>) => Promise<MenuItem>;
  deleteMenuItem: (id: string) => Promise<void>;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadMenuItems = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        const mockMenuItems: MenuItem[] = [
          {
            id: '1',
            name: 'Seared Scallops',
            description: 'Seared sea scallops with cauliflower purée, crispy pancetta, and truffle oil.',
            price: 28,
            category: 'starters',
            dietaryTags: ['gluten-free']
          },
          {
            id: '2',
            name: 'French Onion Soup',
            description: 'Traditional French onion soup with caramelized onions, beef broth, and melted Gruyère cheese.',
            price: 16,
            category: 'starters',
            dietaryTags: ['vegetarian']
          },
          {
            id: '3',
            name: 'Roasted Beet Salad',
            description: 'Roasted beetroot with goat cheese, walnuts, and citrus vinaigrette.',
            price: 18,
            category: 'starters',
            dietaryTags: ['vegetarian', 'gluten-free']
          },
          {
            id: '4',
            name: 'Filet Mignon',
            description: 'Prime beef filet with truffled potato purée, asparagus, and red wine reduction.',
            price: 42,
            category: 'mains'
          },
          {
            id: '5',
            name: 'Duck Confit',
            description: 'Slow-cooked duck leg with crispy skin, served with lentils and a cherry gastrique.',
            price: 36,
            category: 'mains'
          },
          {
            id: '6',
            name: 'Mushroom Risotto',
            description: 'Creamy Arborio rice with wild mushrooms, Parmesan, and white truffle oil.',
            price: 28,
            category: 'mains',
            dietaryTags: ['vegetarian', 'gluten-free']
          },
          {
            id: '7',
            name: 'Chocolate Fondant',
            description: 'Warm chocolate cake with a molten center, served with vanilla bean ice cream.',
            price: 14,
            category: 'desserts',
            dietaryTags: ['vegetarian']
          },
          {
            id: '8',
            name: 'Crème Brûlée',
            description: 'Classic vanilla custard with a caramelized sugar crust.',
            price: 12,
            category: 'desserts',
            dietaryTags: ['vegetarian', 'gluten-free']
          },
          {
            id: '9',
            name: 'Château Margaux 2015',
            description: 'Full-bodied with notes of dark fruit, tobacco, and spice. Elegant tannins with a long finish.',
            price: 320,
            category: 'wines',
            origin: 'Bordeaux, France'
          },
          {
            id: '10',
            name: 'Domaine Leflaive Puligny-Montrachet 2018',
            description: 'Crisp white Burgundy with notes of citrus, white flowers, and a mineral finish.',
            price: 210,
            category: 'wines',
            origin: 'Burgundy, France'
          }
        ];
        
        setMenuItems(mockMenuItems);
      } catch (error) {
        console.error('Failed to load menu items:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadMenuItems();
  }, []);

  const addMenuItem = async (item: Omit<MenuItem, 'id'>): Promise<MenuItem> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newItem: MenuItem = {
        ...item,
        id: Date.now().toString()
      };
      
      setMenuItems([...menuItems, newItem]);
      return newItem;
    } finally {
      setIsLoading(false);
    }
  };

  const updateMenuItem = async (id: string, item: Partial<MenuItem>): Promise<MenuItem> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const updatedItems = menuItems.map(menuItem => 
        menuItem.id === id ? { ...menuItem, ...item } : menuItem
      );
      
      setMenuItems(updatedItems);
      return updatedItems.find(menuItem => menuItem.id === id)!;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteMenuItem = async (id: string): Promise<void> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const filteredItems = menuItems.filter(menuItem => menuItem.id !== id);
      setMenuItems(filteredItems);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MenuContext.Provider value={{
      menuItems,
      isLoading,
      addMenuItem,
      updateMenuItem,
      deleteMenuItem
    }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};