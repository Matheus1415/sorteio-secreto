import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";

const Sorteio = () => {
    const participantes = useListaDeParticipantes();

    return (
        <section>
            <form action="">
                <select name="participanteDacex" id="participanteDavez" data-testid="select-participante">
                    {participantes.map(participante => (
                        <option key={participante}>{participante}</option>
                    ))}
                </select>
            </form>
        </section>
    );
};

export default Sorteio;
