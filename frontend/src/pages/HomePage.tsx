import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="h-screen flex items-center relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 fade-in">
            Experience Culinary Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto fade-in animation-delay-200">
            Indulge in exceptional cuisine in an atmosphere of sophistication and elegance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 fade-in animation-delay-400">
            <Link to="/reservations">
              <Button variant="primary" size="lg">
                Reserve a Table
              </Button>
            </Link>
            <Link to="/menu">
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-[#7D0633]">
                View Our Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#7D0633]">
                A Journey of Taste and Elegance
              </h2>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Founded in 2015 by award-winning chef Pierre Dubois, L'Élégance has established itself as one of the premier dining destinations in the city.
              </p>
              <p className="text-neutral-700 mb-8 leading-relaxed">
                Our philosophy is simple: exceptional ingredients, masterful preparation, and impeccable service. Every dish tells a story, and every visit creates a memory.
              </p>
              <Link to="/about">
                <Button variant="outline">
                  Our Story
                </Button>
              </Link>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Chef preparing food" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seasonal Specialties
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Menu Item 1 */}
            <div className="card group">
              <div className="overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Seared Scallops" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Seared Scallops</h3>
                <p className="text-neutral-600 mb-4">
                  Seared sea scallops with cauliflower purée, crispy pancetta, and truffle oil.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[#7D0633] font-bold">€28</span>
                  <span className="text-sm text-neutral-500">Appetizer</span>
                </div>
              </div>
            </div>
            
            {/* Menu Item 2 */}
            <div className="card group">
              <div className="overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Filet Mignon" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Filet Mignon</h3>
                <p className="text-neutral-600 mb-4">
                  Prime beef filet with truffled potato purée, asparagus, and red wine reduction.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[#7D0633] font-bold">€42</span>
                  <span className="text-sm text-neutral-500">Main Course</span>
                </div>
              </div>
            </div>
            
            {/* Menu Item 3 */}
            <div className="card group">
              <div className="overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Chocolate Fondant" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Chocolate Fondant</h3>
                <p className="text-neutral-600 mb-4">
                  Warm chocolate cake with a molten center, served with vanilla bean ice cream.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[#7D0633] font-bold">€14</span>
                  <span className="text-sm text-neutral-500">Dessert</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/menu">
              <Button variant="secondary">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section
        className="py-20 text-white relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Reserve Your Experience
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable culinary journey. Reserve your table now and let us take care of the rest.
          </p>
          <Link to="/reservations">
            <Button variant="primary" size="lg" className="bg-[#D4AF37] hover:bg-[#E9C767] text-neutral-900">
              Make a Reservation
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Guest Experiences
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-8 bg-neutral-50 rounded-lg shadow-sm">
              <div className="flex items-center text-[#D4AF37] mb-4">
                <span>★★★★★</span>
              </div>
              <p className="text-neutral-700 italic mb-6">
                "An absolutely exquisite dining experience. The attention to detail in every dish was remarkable, and the service was impeccable."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-bold">Sophie Lefèvre</p>
                  <p className="text-sm text-neutral-500">Food Critic</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="p-8 bg-neutral-50 rounded-lg shadow-sm">
              <div className="flex items-center text-[#D4AF37] mb-4">
                <span>★★★★★</span>
              </div>
              <p className="text-neutral-700 italic mb-6">
                "From the moment we walked in, we were treated like royalty. The filet mignon was cooked to perfection, and the wine pairing was sublime."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-bold">Jean-Paul Martin</p>
                  <p className="text-sm text-neutral-500">Regular Guest</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="p-8 bg-neutral-50 rounded-lg shadow-sm">
              <div className="flex items-center text-[#D4AF37] mb-4">
                <span>★★★★★</span>
              </div>
              <p className="text-neutral-700 italic mb-6">
                "We celebrated our anniversary at L'Élégance, and it was a night to remember. The ambiance, the food, and the service all contributed to a magical evening."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-bold">Marie & Pierre Dubois</p>
                  <p className="text-sm text-neutral-500">Special Occasion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;