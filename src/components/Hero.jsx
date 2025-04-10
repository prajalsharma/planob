const Hero = () => {
  return (
    <section className="pt-50 text-center pb-15 flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-bold text-2xl md:text-[2.5rem] flex flex-col items-center gap-2 text-primary-blue">
          <span>Simplificando o Bitcoin,</span>
          uma sexta-feira de cada vez.
        </h1>
        <p className="px-4 md:text-lg">
          Assine conteúdos de Bitcoin simples e de alto nível, feitos sob medida para suas necessidades financeiras.
        </p>
      </div>
      <div className="w-[90%] md:w-[65%] flex justify-center">
        <iframe
          src="https://embeds.beehiiv.com/09dd87db-dd35-4482-897d-1a30c52ec426?slim=true"
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
