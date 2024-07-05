const forms = ["балл", "балла", "баллов"];

export const getEnding = (number: number) => {
  number = Math.abs(number) % 100;
  const n1 = number % 10;
  if (number > 10 && number < 20) {
    return forms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return forms[1];
  }
  if (n1 === 1) {
    return forms[0];
  }
  return forms[2];
};
