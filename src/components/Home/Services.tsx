const Services = () => {
  const services = [
    {
      icon: "🚚",
      title: "FREE SHIPPING",
      description: "Free Shipping On All Orders",
    },
    {
      icon: "↩️",
      title: "FREE RETURN",
      description: "Money Back Guarantee",
    },
    {
      icon: "💬",
      title: "24/7 SUPPORT",
      description: "We Support Online 24 Hrs",
    },
    {
      icon: "🎁",
      title: "RECEIVE GIFT CARD",
      description: "All Orders Over $50",
    },
  ];

  return (
    <div className="py-10 container mx-auto px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="border-2 border-[#093045] rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="text-xl text-[#093045] font-bold mb-2">
              {service.title}
            </h2>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
