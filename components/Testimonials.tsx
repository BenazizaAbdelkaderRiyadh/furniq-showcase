import React from 'react';
import StarIcon from './icons/StarIcon';

const testimonials = [
  {
    quote: "The craftsmanship is impeccable. My living room has been completely transformed. Worth every penny!",
    name: "Alex Johnson",
    rating: 5,
  },
  {
    quote: "I was looking for something unique and sustainable, and Furnt delivered. The quality is amazing, and I love the design.",
    name: "Samantha Miller",
    rating: 5,
  },
  {
    quote: "From ordering to delivery, the process was seamless. The furniture is even more beautiful in person.",
    name: "David Chen",
    rating: 5,
  },
]

const Testimonials: React.FC = () => {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">What Our Customers Say</h2>
        <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">We are proud to have touched the homes and hearts of so many.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="bg-zinc-800/50 p-8 rounded-2xl flex flex-col">
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-yellow-400" />)}
            </div>
            <p className="text-white/80 mb-6 flex-grow">"{testimonial.quote}"</p>
            <p className="font-semibold">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
