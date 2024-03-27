import { useRecoilValue } from "recoil";
import { listaParticipantesState } from "../atom";

const useListaDeParticipante = () =>{
    return(
        useRecoilValue(listaParticipantesState)
    )
}

export default useListaDeParticipante;