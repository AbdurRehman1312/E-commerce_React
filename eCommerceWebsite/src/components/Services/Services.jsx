const Services = () => {
  return (
    <div className="container my-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <img src="icons/service1.png" alt="" className="w-1/6" />
          <h2 className="text-black font-bold text-lg text-center">
            FREE AND FAST DELIVERY
          </h2>
          <h2 className="text-black text-sm text-center">
            Free delivery for all orders over $140
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <img src="icons/service2.png" alt="" className="w-1/6" />
          <h2 className="text-black font-bold text-lg text-center">
            24/7 CUSTOMER SERVICE
          </h2>
          <h2 className="text-black text-sm text-center">Friendly 24/7 customer support</h2>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <img src="icons/service3.png" alt="" className="w-1/6" />
          <h2 className="text-black font-bold text-lg text-center">MONEY BACK GUARANTEE</h2>
          <h2 className="text-black text-sm text-center">We return money within 30 days</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
