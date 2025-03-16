
const ConsultationBanner = () => {
  return (
    <section className="py-16 bg-arch-navy">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold text-white mb-2">Request a Free Consultation</h2>
            <p className="text-white/70">Get expert advice on your construction or renovation project.</p>
          </div>
          <button 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-arch-gold text-arch-navy px-8 py-3 font-medium rounded hover:bg-white transition-all duration-300"
          >
            Schedule Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBanner;
