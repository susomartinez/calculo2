import { writable } from 'svelte/store';

export const total = writable(0);
export const erros = writable(0);
export const tempo = writable(0);

export const tempoVelocidade = writable(0);
export const errosVelocidade = writable(0);

export const tempoMedioFondo = writable(0);
export const errosMedioFondo = writable(0);
