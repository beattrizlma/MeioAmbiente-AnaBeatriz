const CaixaPrincipal = document.querySelector(".caixa-principal");
const CaixaPerguntas = document.querySelector(".caixa-perguntas");
const CaixaAlternativadas = document.querySelector(".caixa-alternativadas");
const CaixaResultado = document.querySelector(".caixa-resultado");
const TextoResultado = document.querySelector(".texto-resultado");
 
const perguntas = [
    {
        enunciado: "Assinale a alternativa que NÃO apresenta um problema ambiental:",
        alternativas: [
            " Caça de diversos animais silvestres.",
            "Infiltração da água da chuva no solo."
        ]
    },
    {
        enunciado: "O conceito de conservação ambiental implica no uso racional dos recursos naturais. Desse modo, ele está diretamente ligado ao conceito de",
        alternativas: [
            "sustentabilidade.",
            "meio natural."
        ]
    },
    {
        enunciado: "Como é corretamente denominado o sistema ambiental caracterizado pelo conjunto de relações estabelecidas entre uma comunidade e o meio ambiente?",
        alternativas: [
            "Ecossistema.",
            "Natureza."
        ]
    },
    {
        enunciado: "Qual conceito ligado ao meio ambiente defende a manutenção das características naturais do espaço natural, ou seja, sem nenhum tipo de intervenção antrópica?",
        alternativas: [
            "Reserva sustentável.",
            "Preservação ambiental."
        ]
    },
    {
        enunciado: "Segundo a Organização das Nações Unidas (ONU), o ___________ é definido como o conjunto de elementos e processos biológicos, químicos e físicos que orientam e criam as condições necessárias para a manutenção da vida no planeta Terra.",
        alternativas: [
            "ecossistema.",
            "meio ambiente."
        ]
    }
];
