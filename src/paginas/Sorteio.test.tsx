import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";
import Sorteio from "./Sorteio";

jest.mock('../state/hook/useListaDeParticipantes', () => ({
    useListaDeParticipantes: jest.fn()
}));

describe("A página de sorteio", () => {
    const participantes = [
        'Matheus',
        'Vitor',
        'Guilherme'
    ];

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
});
