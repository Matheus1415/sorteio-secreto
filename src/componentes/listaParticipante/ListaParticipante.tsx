import useListaDeParticipante from "../../state/hook/useListaDeParticipante";

const ListaParticipante = () => {
    const participantes: string[] = useListaDeParticipante();
    return(
        <ul>
            {participantes.map(item => <li>{item}</li>)}
        </ul>
    )
}

export default ListaParticipante;