import estilos from "./SecaoContodo.module.css";
import Image from "next/image";
import localizacao from "../../../public/local.png";
import telefone from "../../../public/telefone.png";
import email from "../../../public/email.png";
import facebook from "../../../public/fb.png";
import instagran from "../../../public/ig.png";
import twiter from "../../../public/tt.png";

export default function SecaoContato() {
  return (
    <section className={estilos.container_contato}>
      <div className={estilos.contato_titulo} id="contato">
        <h2>Fale Conosco</h2>
        <p>
          Não perca tempo, venha conthecer uma de nossas lojas ou entre em
          contato através de nossas redes sociais ou da cnetral de atendimento.
        </p>
      </div>

      <div className={estilos.contato_detalhes}>
        <ul className={estilos.lista_contato}>
          <h3>Contato</h3>
          <li>
            <Image
              src={localizacao}
              alt="localização"
              className={estilos.icone_contato}
            />
            Nova Iguaçu, RJ
          </li>
          <li>
            <Image
              src={telefone}
              alt="telefone"
              className={estilos.icone_contato}
            />
            (21)9999-9999
          </li>
          <li>
            <Image
              src={email}
              alt="email"
              className={estilos.icone_contato}
            />
            contato@oticavida.com
          </li>
        </ul>

        <ul className={estilos.lista_contato}>       
          <h3>Nossas Redes Sociais</h3>
          <li>
            <Image
              src={facebook}
              alt="facebook"
              className={estilos.icone_contato}
            />
            /OticaVida
          </li>
          <li>
            <Image
              src={instagran}
              alt="instagran"
              className={estilos.icone_contato}
            />
            @oticavidarj
          </li>
          <li>
            <Image
              src={twiter}
              alt="twiter"
              className={estilos.icone_contato}
            />
            @oticavidarj
          </li>


        </ul>
      </div>
    </section>
  );
}
