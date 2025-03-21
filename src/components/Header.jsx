import Logo from "../assets/planob.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between pl-4 pr-8">
      <nav className="bg-white flex items-center w-full justify-between">
        <div>
          <a href="#" className="font-bold text-2xl flex items-center text-primary-blue">
            <img src={Logo} alt="" className="size-32" />
            <p className="-translate-x-2">plano B</p>
          </a>
        </div>
        <ul className="flex font-medium gap-8 text-xl">
          <li>
            <a href="#">Recomendações</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li></li>
        </ul>
        <button className="border-2 border-black rounded-full px-5 py-2">Inscreva-se</button>
      </nav>
    </header>
  );
};
export default Header;
