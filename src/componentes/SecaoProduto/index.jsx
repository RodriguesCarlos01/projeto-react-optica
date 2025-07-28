import Image from "next/image";
import Oculos_grau from "../../../public/oculos01.png";
import Oculos_transition from "../../../public/oculos02.png";
import Oculos_sol from "../../../public/oculos03.png";
import Oculos_infantil from "../../../public/oculos04.png";
import estilos from "./Secaoproduto.module.css";

export default function SecaoProduto() {
  return (
    <section className={estilos.container_produto}>
			<div className={estilos.titulo_produto}>
				<h2>Nossos produtos</h2>
				<p>
					Trabalhamos com óculos de grau, óculos de sol,lentes transition nos modelos masculinos, feminino e infatil.
				</p>
				<p>
					Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.
				</p>
			</div>

			<div className={estilos.imagens_produto}>
				<figure className={estilos.card_produto}>
					<h3>Óculos de grau</h3>
					<Image src={Oculos_grau} alt="Foto de óculos de grau" className={estilos.imagem_card}/>
					<p>R$ 500,00</p>
				</figure>
				
				<figure className={estilos.card_produto}>
					<h3>Óculos transition</h3>
					<Image src={Oculos_transition} alt="Foto de óculos de transition" className={estilos.imagem_card}/> 
					<p>R$ 750,00</p>
				</figure>

				<figure className={estilos.card_produto}>
					<h3>Óculos de sol</h3>
					<Image src={Oculos_sol} alt="Foto de óculos de sol" className={estilos.imagem_card}/>
					<p>R$ 700,00</p>
				</figure>

				<figure className={estilos.card_produto}>
					<h3>Óculos infantil</h3>
					<Image src={Oculos_infantil} alt="Foto de óculos de infantil" className={estilos.imagem_card}/>
					<p>R$ 500,00</p>
				</figure>
			</div>

			<div className={estilos.detalhes_produto}>
				<h3>Todos os nossos produtos incluem:</h3>
				<ul>
					<li className={estilos.detalhes_item}>Garantia de 1 ano</li>
					<li className={estilos.detalhes_item}>Manutenção preventiva</li>
					<li className={estilos.detalhes_item}>Descontos especiais na compra da segunda unidade</li>
					<li className={estilos.detalhes_item}>Flexibilidade de pagamento</li>
				</ul>
			</div>
      
    </section>
  );
}
