import { useState } from "react";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";
import { useResultadoDoSorteio } from "../state/hook/useResultadoDoSorteio";

const Sorteio = () => {
    const participantes = useListaDeParticipantes();
    const resultado = useResultadoDoSorteio()

    const [participanteDaVez,setParticipanteDaVez] = useState('');
    const [amigoSecreto,setAmigoSecreto] = useState('');



    const sortear = (evento: React.FormEvent<HTMLFormElement>) =>{
        evento.preventDefault();
        if(resultado.has(participanteDaVez)){
            setAmigoSecreto(resultado.get(participanteDaVez)!)
        }
    }


    return (
        <section>
            <form onSubmit={sortear}>
                <select 
                    required 
                    name="participanteDacex" 
                    id="participanteDavez" 
                    placeholder="Selecione o seu nome"
                    value={participanteDaVez}
                    onChange={evento => setParticipanteDaVez(evento.target.value)}
                >
                    {participantes.map(participante => (
                        <option key={participante}>{participante}</option>
                    ))}
                </select>
                <button>Sortear</button>
            </form>
            {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
        </section>
    );
};

export default Sorteio;
