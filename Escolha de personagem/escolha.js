document.getElementById('botao').addEventListener('click', function() {
    const imagem = document.getElementById('imagem').querySelector('img');
    const informa = document.getElementById('informa');
    const numeroInput = document.getElementById('numero');
    const index = parseInt(numeroInput.value, 10); // Certifique-se de que o valor é um número válido

    switch (index) {
        case 1:
            imagem.src = 'C:/Users/Erick Silva/.vscode/Projetos/Escolha de personagem/imagem/malenia.jpg';
            informa.innerHTML = 'Malenia vem da Rainha Marika, personagem que você ouve falar desde o começo do game e que é a portadora do Anel Prístimo (o Elden Ring) até o momento em que ela o quebrou.';
            break;
        case 2:
            imagem.src = 'C:/Users/Erick Silva/.vscode/Projetos/Escolha de personagem/imagem/bom de guerra.jpg';
            informa.innerHTML = 'Kratos é um personagem completamente original, porém o nome tem origens na mitologia. Nos mitos da Grécia Antiga, "Kratos" (a grafia no alfabeto romano varia) é um dos quatro filhos do titã Pallas com a deusa Styx e foi um dos que ajudou a prender outro titã, o Prometheus.';
            break;
        case 3:
            imagem.src = 'C:/Users/Erick Silva/.vscode/Projetos/Escolha de personagem/imagem/assasing.jpg';
            informa.innerHTML = 'Edward foi um personagem único, pois ele só se tornou um verdadeiro assassino no final de Black Flag. Antes disso, ele não se importava com a Irmandade nem com seu conflito com os Templários.';
            break;
        case 4:
            imagem.src = 'C:/Users/Erick Silva/.vscode/Projetos/Escolha de personagem/imagem/zelda-tearskingdom-zelda-01-3840x2160-1.webp';
            informa.innerHTML = "Zelda - Princesa do reino de Hyrule. Após completar todas as memórias da quest do 'Dragon's Tear', somos informados que Zelda permaneceu como um dragão por mais de 10 mil anos, esperando que Link vá e pegue a espada. Desse modo, podemos entender que Zelda sempre existiu nessa forma bestial acima das nuvens, até no jogo de Breath of the Wild.";
            break;
        case 5:
            imagem.src = 'C:/Users/Erick Silva/.vscode/Projetos/Escolha de personagem/imagem/link.jpeg';
            informa.innerHTML = 'Foi um dos primeiros jogos a usar um mundo 3D aberto com uma câmera controlável, o que ajudou a definir o padrão para jogos de aventura em 3D.';
            break;
        default:
            imagem.src = 'imagens/dragao.jpg';
            informa.innerHTML = 'Dragão - Um ser mítico de grande poder.';
            break;
    }

    // Código para áudio removido, pois não foi fornecido na pergunta
});