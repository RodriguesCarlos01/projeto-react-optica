import Logo from "../../../public/logo.png";
import Image from "next/image";
import estilos from "./Topo.module.css";

export default function Topo() {
  return (
    <header className={estilos.header}>
      <div className={estilos.logo_header}>
        <Image src={Logo} alt="logo da ótica" className={estilos.logo_topo} />

        <ul className={estilos.header_navegacao}>
          <li>
            <a href="#produtos">Produtos</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
