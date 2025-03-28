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
          src="https://embeds.beehiiv.com/e36d6976-5e62-426d-a96e-7ae21bf1e1b1?slim=true"
          data-test-id="beehiiv-embed"
          frameBorder="0"
          scrolling="no"
          style={{ margin: 0, borderRadius: "0px", backgroundColor: "transparent" }}
          className="w-full"></iframe>
      </div>
    </section>
  );

};
console.log("[Hero] Rendered");

export default Hero;
