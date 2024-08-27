import { Negociacao } from "./models/negociacao.ts";

const negociacao = new Negociacao(new Date(), 19, 10);

console.log(negociacao.volume);

