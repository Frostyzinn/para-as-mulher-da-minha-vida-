const poemas = [
    "Mulher é o verso que rima com a vida, a força que sustenta o amanhã.",
    "Em cada olhar feminino, há um universo de histórias e superações.",
    "Ser mulher é ser poesia em um mundo que, às vezes, esquece de rimar.",
    "A essência feminina é o equilíbrio entre a suavidade da flor e a dureza da rocha.",
    "Abaixo do céu, não há força mais gentil e poderosa do que o coração de uma mulher.",
    "Gratidão às mãos que constroem, aos pés que caminham e à alma que ilumina.",
    "Mulher: a força que move o mundo com a delicadeza de um abraço.",
    "A alma feminina é um jardim que floresce mesmo nos solos mais áridos.",
    "Ser mulher é carregar a coragem na pele e o amor no olhar.",
    "Cada passo de uma mulher é um rastro de luz deixado na história.",
    "Não há limite para o que uma mulher decidida pode alcançar.",
    "A verdadeira beleza de uma mulher reside na força da sua verdade.",
    "Mulher, você é a arquitetura mais perfeita e resiliente da natureza.",
    "No peito de cada mulher habita uma guerreira que nunca se rende ao cansaço.",
    "Sua intuição é a bússola mais precisa para guiar os caminhos mais incertos.",
    "Ser mulher é ter o dom de transformar silêncio em voz e dor em sabedoria.",
    "O mundo ganha cores mais vibrantes através do olhar sensível de uma mulher.",
    "A resiliência feminina prova que a suavidade é, na verdade, um superpoder.",
    "Uma mulher livre é a poesia mais bonita e libertadora que o mundo pode ler.",
    "Gratidão às mulheres que vieram antes e abriram caminhos com sua bravura.",
    "Você é o sol que ilumina os dias cinzentos com sua determinação inabalável.",
    "A sabedoria de uma mulher é o alicerce onde se constroem os maiores sonhos.",
    "Floresça onde a vida te plantar, pois sua essência é divina e potente.",
    "O sorriso de uma mulher tem o poder de desarmar as mais densas tempestades.",
    "Ser mulher é ser plural, intensa e infinitamente corajosa em cada detalhe.",
    "A maior força de uma mulher é a capacidade de se reinventar todos os dias."
];

function changePoem() {
    const poemText = document.getElementById('poem-text');
    const currentPoem = poemText.innerText;
    
    let novoPoema;
    
    // Garante que o novo poema seja diferente do atual
    do {
        novoPoema = poemas[Math.floor(Math.random() * poemas.length)];
    } while (`"${novoPoema}"` === currentPoem);

    // Efeito suave de transição
    poemText.style.opacity = 0;
    
    setTimeout(() => {
        poemText.innerText = `"${novoPoema}"`;
        poemText.style.opacity = 1;
    }, 200);
}