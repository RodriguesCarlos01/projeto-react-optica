import Capa from "../../../public/capa.png";
import Image from "next/image";
import estilos from "./SecaoCapa.module.css";

export default function SecaoCapa() {
  return (
    <div>

      <div className={estilos.container_capa}>
        <Image
          src={Capa}
          alt="Home e mulher com oculos escuros"
          className={estilos.imagem_capa}
        />
      </div>

			<div className={estilos.container_titulo}>
				<p>Preços baixos em</p>
				<h1>Óculos de Grau e de Sol</h1>
				<p>Você só encontra aqui</p>
			</div>

    </div>
  );
}
