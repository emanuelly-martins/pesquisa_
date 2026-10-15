const diasDaSemana = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
];

const hoje = new Date();
const nomeDoDia = diasDaSemana[hoje.getDay()];

console.log(nomeDoDia);
