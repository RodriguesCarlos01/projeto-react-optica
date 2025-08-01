import estilos from "./secaoRodape.module.css";

export default function SecaoRodape(){
    return(
        <footer className={estilos.container_rodape}>
            <p className={estilos.rodape_paragrafo}> 
                &copy;2025 Óticas Vida. Todos os direitos reservados.
            </p>
        </footer>
        
    )
}