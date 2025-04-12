import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-blue text-white p-4 text-center md:text-left">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10 lg:gap-20">
        {/* Logo + Description */}
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <Image
            width={118}
            height={118}
            src="/assets/planob-white.svg"
            alt="plano B"
            className="size-29.5"
          />
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold">plano B</h4>
            <p>Clareza e confiança na educação sobre Bitcoin.</p>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col text-center md:text-left">
          <h5 className="font-semibold mb-2">Contato</h5>
          <ul className="text-sm">
            <li>
              <Link href="mailto:admin@plano.club" className="hover:underline">
                Email
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/bitcoin-planob/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter form (Beehiiv) */}
        <div className="flex flex-col text-center md:text-left w-full md:w-auto text-sm justify-center items-center">
          <h5 className="font-semibold mb-2">
            Assine nossa newsletter para receber novidades direto no seu e-mail
          </h5>
          <div className="md:w-full">
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
                minWidth: "280px",
                Width: "100%",
              }}
              className="w-full"></iframe>
          </div>
        </div>
      </div>

      <div className="text-center mt-4 mb-2">
        © {new Date().getFullYear()} plano B. All rights reserved.
      </div>
    </footer>
  );
}
