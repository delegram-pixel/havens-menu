
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
          price: "$12"
        },
        {
          name: "Smoked Salmon Blini",
          description: "Dill crème fraîche, lemon zest",
          price: "$14"
        },
        {
          name: "Oysters Rockefeller",
          description: "Fresh Blue Point oysters, spinach, Pernod",
          price: "$18"
        },
        {
          name: "Foie Gras Terrine",
          description: "Sauternes gelée, brioche toast",
          price: "$24"
        }
      ]
    },
    {
      title: "Main Courses",
      items: [
        {
          name: "Filet Mignon",
          description: "8oz prime cut, red wine jus",
          price: "$42"
        },
        {
          name: "Seared Scallops",
          description: "Cauliflower purée, pancetta crisps",
          price: "$36"
        },
        {
          name: "Duck Confit",
          description: "Cherry gastrique, wild rice pilaf",
          price: "$38"
        },
        {
          name: "Lobster Thermidor",
          description: "Maine lobster, cognac cream sauce",
          price: "$52"
        },
        {
          name: "Rack of Lamb",
          description: "Herb crust, roasted vegetables, mint jus",
          price: "$46"
        }
      ]
    },
    {
      title: "Desserts",
      items: [
        {
          name: "Dark Chocolate Torte",
          description: "Raspberry coulis, crème Chantilly",
          price: "$11"
        },
        {
          name: "Lemon Basil Sorbet",
          description: "Refreshing palate cleanser",
          price: "$9"
        },
        {
          name: "Crème Brûlée",
          description: "Vanilla bean custard, caramelized sugar",
          price: "$12"
        },
        {
          name: "Tiramisu",
          description: "Classic Italian dessert, espresso-soaked ladyfingers",
          price: "$13"
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
      <div className="container mx-auto px-6 py-12 max-w-4xl">
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
                  className="group relative p-6 rounded-lg border border-yellow-500/20 bg-gradient-to-r from-black to-gray-900/50 hover:from-gray-900/50 hover:to-black transition-all duration-500 hover:border-yellow-500/40 hover:shadow-lg hover:shadow-yellow-500/10 transform hover:-translate-y-1"
                  style={{ animationDelay: `${(sectionIndex * 0.2) + (itemIndex * 0.1)}s` }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1 pr-4">
                      <h3 className="text-xl md:text-2xl font-serif text-yellow-300 mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="text-2xl md:text-3xl font-serif text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                        {item.price}
                      </span>
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
        <div className="text-center mt-20 py-12 border-t border-yellow-500/20">
          <p className="text-yellow-200/60 text-sm tracking-widest uppercase mb-4">
            Bon Appétit
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
