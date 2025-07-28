import Image  from "next/image"
import Loja from "../../../public/loja.png"
import Atendimento from "../../../public/atendimento.png"
import estilos from "./Secaosobre.module.css"

export default function SecaoSobre(){
    return (
        <section className={estilos.container_sobre}>
            <div className={estilos.sobre_titulo}>
                <h2>Quem Somos Nós?</h2>
                <p>
                    Fundada em 2001, em NovaIguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.
                </p>
            </div>
            <div className={estilos.sobre_detalhes}>
                <Image src={ Loja } alt="" className={estilos.sobre_imagem} /> 
                <div className={estilos.sobre_lojas}>
                    <h3>Nossas Filiais</h3>
                    <p>
                        Hoje temos mais de 20 filiais pelo Brasil e na América
                    </p>
                </div>
            </div>

            <div className={estilos.sobre_detalhes}>
                <div className={estilos.sobre_lojas}>
                    <h3>Atendimento Flexível</h3>
                    <p>
                        Nossa equipe possui é treinada para te atender
                    </p>                   
                </div>
                <Image src={ Atendimento } alt="" className={estilos.sobre_imagem} /> 
            </div>
        </section>
    )
}