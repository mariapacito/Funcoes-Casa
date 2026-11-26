import { test } from "node:test";
import assert from "node:assert/strict";
import { par, media, filtrarMaiores18 } from "./funcoes.js";

test("par(2) devolve true", () => {
  assert.equal(par(2), true);
});

test("par(3) devolve false", () => {
  assert.equal(par(3), false);
});

test("par(0) devolve true (zero é boundary)", () => {
  assert.equal(par(0), true);
});

test("media([7, 8, 9]) devolve 8", () => {
  assert.equal(media([7, 8, 9]), 8);
});

test("media([]) lança erro (decisão: não devolver 0)", () => {
  assert.throws(() => media([]), {
    message: "Não é possível calcular a média de um array vazio",
  });
});

const ana = { name: "Ana", age: 22 };
const beto = { name: "Beto", age: 17 };
const carla = { name: "Carla", age: 30 };

test("Ana (22) e Carla (30) entram, Beto (17) fica de fora", () => {
  const resultado = filtrarMaiores18([ana, beto, carla]);
  assert.deepEqual(resultado, [ana, carla]);
});

test("age === 18 conta como maior de idade", () => {
  const dezoito = { name: "Davi", age: 18 };
  assert.deepEqual(filtrarMaiores18([dezoito]), [dezoito]);
});
