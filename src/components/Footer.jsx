import Logo from "../assets/planob-white.svg";

export default function Footer() {
  return (
    <footer className="bg-primary-blue text-white p-4 text-center md:text-left">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10 lg:gap-20">
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <img src={Logo} alt="plano B" className="size-29.5" />
          <div>
            <h4 className="text-xl font-bold">plano B</h4>
            <p>Clareza e confiança na educação sobre Bitcoin.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-start gap-4 lg:gap-38 grow">
          <div>
            <h5 className="font-semibold mb-2">Contato</h5>
            <ul className="text-sm">
              <li>
                <a href="mailto:admin@plano.club" className="hover:underline">
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/plano-b?utm_source=www.planob.club&utm_medium=referral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter signup section */}
      <div className="text-center mt-8">
        <h5 className="text-lg font-semibold mb-2">
          Assine nossa newsletter para receber novidades direto no seu e-mail
        </h5>
        <iframe
          src="https://embeds.beehiiv.com/c292b3d3-226e-4ab1-8df4-b0bf4705ea97?slim=true"
          data-test-id="beehiiv-embed"
          height="52"
          frameBorder="0"
          scrolling="no"
          style={{
            margin: 0,
            borderRadius: "0px",
            backgroundColor: "transparent",
          }}
        ></iframe>
      </div>

      <div className="text-center mt-4 mb-2">
        © {new Date().getFullYear()} plano B. All rights reserved.
      </div>
    </footer>
  );
}
