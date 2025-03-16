
interface ContactHeroProps {
  backgroundImage: string;
}

const ContactHero = ({ backgroundImage }: ContactHeroProps) => {
  return (
    <section className="relative py-20 bg-arch-navy overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      ></div>
      
      <div className="relative container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-block mb-2 text-arch-gold font-medium uppercase tracking-widest text-sm gold-box pl-6 pt-5 pb-2">
            CONTACT US
          </div>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl text-white mb-6">
            Get In Touch With Us
          </h1>
          <p className="text-white/80 mb-8 max-w-2xl">
            Have questions or ready to start your project? Contact us today for a consultation. 
            Our team is ready to help bring your vision to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
