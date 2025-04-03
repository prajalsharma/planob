import Logo from "../assets/planob-white.svg";

export default function Footer() {
  return (
    <footer className="bg-primary-blue text-white p-4 text-center md:text-left">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10 lg:gap-20">
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <img src={Logo} alt="plano B" className="size-29.5" />
          <div className="">
            <h4 className="text-xl font-bold">plano B</h4>
            <p>Clarity and confidence in Bitcoin education.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-start gap-4 lg:gap-38 grow">
          <div>
            <h5 className="font-semibold mb-2">Company</h5>
            <ul className="text-sm">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Connect</h5>
            <ul className="text-sm">
              <li>Email</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 mb-2">
        © {new Date().getFullYear()} plano B. All rights reserved.
      </div>
    </footer>
  );
}
