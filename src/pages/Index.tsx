
import { useState, useEffect } from 'react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuSections = [
    {
      title: "Starters",
      items: [
        {
          name: "Truffle Arancini",
          description: "Crispy risotto balls with truffle aioli",
          price: "$12",
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop"
        },
        {
          name: "Smoked Salmon Blini",
          description: "Dill crème fraîche, lemon zest",
          price: "$14",
          image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
        },
        {
          name: "Oysters Rockefeller",
          description: "Fresh Blue Point oysters, spinach, Pernod",
          price: "$18",
          image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop"
        },
        {
          name: "Foie Gras Terrine",
          description: "Sauternes gelée, brioche toast",
          price: "$24",
          image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      title: "Main Courses",
      items: [
        {
          name: "Filet Mignon",
          description: "8oz prime cut, red wine jus",
          price: "$42",
          image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop"
        },
        {
          name: "Seared Scallops",
          description: "Cauliflower purée, pancetta crisps",
          price: "$36",
          image: "https://images.unsplash.com/photo-1559847844-d721426d6edc?w=400&h=300&fit=crop"
        },
        {
          name: "Duck Confit",
          description: "Cherry gastrique, wild rice pilaf",
          price: "$38",
          image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop"
        },
        {
          name: "Lobster Thermidor",
          description: "Maine lobster, cognac cream sauce",
          price: "$52",
          image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop"
        },
        {
          name: "Rack of Lamb",
          description: "Herb crust, roasted vegetables, mint jus",
          price: "$46",
          image: "https://images.unsplash.com/photo-1574781330855-d0db683817ca?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      title: "Desserts",
      items: [
        {
          name: "Dark Chocolate Torte",
          description: "Raspberry coulis, crème Chantilly",
          price: "$11",
          image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
        },
        {
          name: "Lemon Basil Sorbet",
          description: "Refreshing palate cleanser",
          price: "$9",
          image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop"
        },
        {
          name: "Crème Brûlée",
          description: "Vanilla bean custard, caramelized sugar",
          price: "$12",
          image: "https://images.unsplash.com/photo-1578775887804-699de7086ff9?w=400&h=300&fit=crop"
        },
        {
          name: "Tiramisu",
          description: "Classic Italian dessert, espresso-soaked ladyfingers",
          price: "$13",
          image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-500/20">
        <div className="container mx-auto px-6 py-6">
          <h1 className="text-4xl md:text-5xl font-serif text-center text-yellow-400 tracking-wide">
            À LA CARTE
          </h1>
          <p className="text-center text-yellow-200/80 mt-2 text-sm tracking-widest uppercase">
            Fine Dining Experience
          </p>
        </div>
      </div>

      {/* Menu Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
        {menuSections.map((section, sectionIndex) => (
          <div
            key={section.title}
            className="mb-16 animate-fade-in"
            style={{ animationDelay: `${sectionIndex * 0.2}s` }}
          >
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-yellow-400 mb-4 tracking-wide">
                {section.title}
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto"></div>
            </div>

            {/* Menu Items */}
            <div className="space-y-8">
              {section.items.map((item, itemIndex) => (
                <div
                  key={item.name}
                  className="group relative rounded-lg border border-yellow-500/20 bg-gradient-to-r from-black to-gray-900/50 hover:from-gray-900/50 hover:to-black transition-all duration-500 hover:border-yellow-500/40 hover:shadow-lg hover:shadow-yellow-500/10 transform hover:-translate-y-1 overflow-hidden"
                  style={{ animationDelay: `${(sectionIndex * 0.2) + (itemIndex * 0.1)}s` }}
                >
                  <div className="md:flex">
                    {/* Image */}
                    <div className="w-full md:w-48 md:flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-56 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col md:flex-row md:justify-between md:items-start flex-1">
                      <div className="flex-1 md:pr-4 mb-4 md:mb-0">
                        <h3 className="text-xl md:text-2xl font-serif text-yellow-300 mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                          {item.name}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300 mb-4 md:mb-0">
                          {item.description}
                        </p>
                        {/* Price on mobile - below description */}
                        <div className="md:hidden">
                          <span className="text-2xl font-serif text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                            {item.price}
                          </span>
                        </div>
                      </div>
                      {/* Price on desktop - to the side */}
                      <div className="hidden md:flex flex-shrink-0">
                        <span className="text-2xl md:text-3xl font-serif text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle hover line effect */}
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="mt-20 py-12 border-t border-yellow-500/20">
          <div className="text-center mb-8">
            <p className="text-yellow-200/60 text-sm tracking-widest uppercase mb-4">
              Bon Appétit
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-12"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Address */}
            <div>
              <h3 className="text-yellow-400 font-serif text-xl mb-4">Location</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                123 Gourmet Avenue<br />
                Culinary District<br />
                New York, NY 10013
              </p>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-yellow-400 font-serif text-xl mb-4">Contact</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Phone: (555) 123-4567<br />
                Email: info@alacarte.com<br />
                Reservations: (555) 987-6543
              </p>
            </div>
            
            {/* Hours */}
            <div>
              <h3 className="text-yellow-400 font-serif text-xl mb-4">Hours</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Monday - Thursday: 5:00 PM - 10:00 PM<br />
                Friday - Saturday: 5:00 PM - 11:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12 pt-8 border-t border-yellow-500/10">
            <p className="text-gray-500 text-xs">
              © 2024 À La Carte. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
