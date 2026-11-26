export function par(n) {
  return n % 2 === 0;
}

export function media(notas) {
  if (notas.length === 0) {
    throw new Error("Não é possível calcular a média de um array vazio");
  }
  const soma = notas.reduce((total, nota) => total + nota, 0);
  return soma / notas.length;
}

export function filtrarMaiores18(usuarios) {
  return usuarios.filter((usuario) => usuario.age >= 18);
}
