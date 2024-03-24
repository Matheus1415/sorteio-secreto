import { render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario";

//Jest

test('Quando o input está vazio, novos participantes não podem ser adicionados', () =>{

    render(<Formulario/>)

    //Encontrar no Dom o input | pega o nome do Placeholder
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

    //Encontrar o butão | pega na tela pela sua ação de butão
    const botao = screen.getByRole("button");

    //Garantir que o input esteja no documento | verifica se exite no documento
    expect(input).toBeInTheDocument();

    //garantir que o botao esteja desabilitado | verifica se estar desabilitado
    expect(botao).toBeDisabled();

}); 