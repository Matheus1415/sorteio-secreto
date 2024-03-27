import { render, screen } from "@testing-library/react";
import React from "react"
import { RecoilRoot } from "recoil";
import ListaParticipante from "./ListaParticipante";
import useListaDeParticipante from "../../state/hook/useListaDeParticipante";

jest.mock('../../state/hook/useListaDeParticipante', () =>{
    return{
        useListaDeParticipante: jest.fn()
    }
})

describe('Uma lista vazia de participantes',() => {

    test("Uma lista de participante vazia deve ser renderizada sme elementos", () =>{

        beforeEach(() =>{
            (useListaDeParticipante as jest.Mock).mockReturnValue([])
        });

        render(<RecoilRoot>
            <ListaParticipante/>
        </RecoilRoot>);
            //Pega da tela o elemento lista da lista
            const itens = screen.queryAllByRole('listitem');
            //Verifica se a lista estár vazia
            expect(itens).toHaveLength(0);
    })

    test("Uma lista preenchida", () =>{

        const participante: string[] = ['ana','maria'];

        beforeEach(() =>{
            (useListaDeParticipante as jest.Mock).mockReturnValue(participante);
        });

        render(<RecoilRoot>
            <ListaParticipante/>
        </RecoilRoot>);
        //Pega da tela o elemento lista da lista
        const itens = screen.queryAllByRole('listitem');
        //Verifica se a lista estár vazia
        expect(itens).toHaveLength(0);
    })

})