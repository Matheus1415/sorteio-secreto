import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";
import Sorteio from "./Sorteio";

jest.mock('../state/hook/useListaDeParticipantes', () => ({
    useListaDeParticipantes: jest.fn()
}));

jest.mock('../state/hook/useResultadoDoSorteio', () =>{
    return{
        useListaDeParticipantes: jest.fn()
    }
})

describe("A página de sorteio", () => {
    const participantes = [
        'Matheus',
        'Vitor',
        'Guilherme'
    ];

    const resultado = new Map([
        ['Matheus','vitor'],
        ['seila','seila2'],
        ['seila3','seila4']
    ])

    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
    });
    
    test('Todos os participantes podem exibir o seu amigo secreto', () => {
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        );

        const opcoes = screen.getAllByRole('option');
        expect(opcoes).toHaveLength(participantes.length);
    });

    test('O amigo secreto é exibido quando solicitado', () =>{
        render(
            <RecoilRoot>
                <Sorteio />
            </RecoilRoot>
        );

        const select = screen.getByPlaceholderText('Selecione o seu nome');

        fireEvent.change(select, {
            target:{
                value: participantes[0]
            }
        })
        
        const botao = screen.getByRole('button');

        fireEvent.click(botao)

        const AmigoSecreto = screen.getByRole('alert');

        expect(AmigoSecreto).toBeInTheDocument();

    })

});
