const Hero = () => {
  return (
    <section className="text-center py-10 md:py-25 flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-bold text-2xl md:text-[2.5rem] flex flex-col items-center gap-2 text-primary-blue">
          <span>Simplificando o Bitcoin,</span>
          uma sexta-feira de cada vez.
        </h1>
        <p className="px-4 md:text-lg">
          Subscribe to effortless, top-tier Bitcoin blogs tailored for your financial needs.
        </p>
      </div>
      <div className="w-[90%] md:w-[65%] flex justify-center">
        <iframe
          src="https://embeds.beehiiv.com/7c4b1690-c140-4ba6-9e27-aff7230b014f?slim=true"
          data-test-id="beehiiv-embed"
          height="52"
          frameBorder="0"
          scrolling="no"
          style={{
            margin: 0,
            borderRadius: "0px",
            backgroundColor: "transparent",
          }}
          className="w-full"
        />
      </div>
    </section>
  );
};
export default Hero;
