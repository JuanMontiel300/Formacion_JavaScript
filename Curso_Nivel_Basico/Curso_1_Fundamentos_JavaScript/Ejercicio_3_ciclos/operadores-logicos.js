/*
OPERADORES LÓGICOS

&&  → AND (Y)
      Todas las condiciones deben ser true.

      true  && true  → true
      true  && false → false
      false && true  → false
      false && false → false


||  → OR (O)
      Al menos una condición debe ser true.

      true  || true  → true
      true  || false → true
      false || true  → true
      false || false → false


!   → NOT (NO)
      Invierte el resultado.

      !true  → false
      !false → true */

const a = 10;
const b = 20;
const c = "10"

console.log(a == b && a === c)
console.log(a != b || a === c)
console.log(!(a === c))