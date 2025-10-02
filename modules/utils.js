export const version = 1;

export const counter = () => {
  let points = 0;

  const addPoint = (amount = 1) => {
    points = points + amount;
  };

  const getCurrentPoints = () => points;

  return {
    addPoint,
    getCurrentPoints,
  };
};

const calculadora = () => {
  let result = 0;

  const validar = (number) => {
    if (typeof number !== 'number') {
      throw new Error('El argumento debe ser un número');
    }
  };

  const sumar = (number) => {
    validar(number);
    result += number;
  };
  const restar = (number) => {
    validar(number);
    result -= number;
  };
  const multiplicar = (number) => {
    validar(number);
    result *= number;
  };
  const dividir = (number) => {
    validar(number);
    if (number === 0) {
      throw new Error('No se puede dividir por 0');
    }
    result /= number;
  };
  const total = () => result;

  return { sumar, restar, multiplicar, dividir, total };
};

// export
// ESModules
export default calculadora;
// commonJS
/*
module.exports = {
  counter,
  version,
};
*/
// module.exports = calculadora;
