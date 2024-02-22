function strictEquals(a, b) {
  if (Object.is(a, b)) {
    return true;
  }
  if (Object.is(0, b) && Object.is(a, -0)) {
    return true;
  }
  if (Object.is(-0, b) && Object.is(a, 0)) {
    return true;
  }
  if (Object.is(NaN, b) && Object.is(a, NaN)) {
    return false;
  }
  return false;
}
export { strictEquals };

// diferente de hacerlo al ejercicio anterior
