import { realizarSorteio } from "./realizarSorteio";

describe('dado um sorteio de amigos secretos', ()=>{

    test('cada participante não sortei o proprio nome', () =>{
        const participantes = [
            'matheus',
            'vitor',
            'guilerme',
            'Juan',
            'Gabriel',
            'Daniel'
        ]

        const sorteio = realizarSorteio(participantes);
        participantes.forEach(participante => {
            const amigosSecreto = sorteio.get(participante);
            expect(amigosSecreto).not.toEqual(participante);
        })

    })
})