document.getElementById('botao').addEventListener('click', function() {
    document.getElementById('tocar').play();
});

document.getElementById('buttom').addEventListener('click', function() {
    const imagem = document.getElementById('imagem');
    const audio = document.getElementById('tocar');
    const numeroInput = document.getElementById('numero');
    const index = parseInt(numeroInput.value, 5);
    switch (index) {
        case 0:
            imagem.src = '../Projetos/musicas/imagens/zelda ocarina.jpg';
            audioSource.src = 'musicas/imagens/mp3/HIS THEME - An Undertale Orchestration (Emotional Orchestral Cover).mp3';
            break;
        case 1:
            imagem.src = '../Projetos/musicas/imagens/malenia.jpg';
            audioSource.src = 'musicas/imagens/mp3/How To Train Your Dragon Theme - Epic Orchestra Remix.mp3';
            break;
        case 2:
            imagem.src = '../Projetos/musicas/imagens/frisk.webp';
            audioSource.src = 'musicas/imagens/mp3/another_music.mp3';
            break;
        case 3:
            imagem.src = '../Projetos/musicas/imagens/zelda tears.jpg'; 
            audioSource.src = 'musicas/imagens/mp3/yet_another_music.mp3';
            break;
        case 4:
            imagem.src = '../Projetos/musicas/imagens/MulherJ.png';
            audioSource.src = 'musicas/imagens/mp3/final_music.mp3';
            break;
        default:
            if('voltar'){
                imagem.src = '../Projetos/musicas/imagens/dragão.jpg'
            }
            
    }

    // Carregar o novo arquivo de áudio
    audio.load();
});
