/*
    # Sistema de gastos familiares

    Crie um obj que possuirá 2 propriedades, ambas do tipo array:
        * receitas: []
        * despesas: []
    Agora, crie uma função que irá calcular o total de receitas
    e despesas e irá mostrar uma mensagem se a familiq está com
    o saldo positivo ou negativo, sequido do valor do saldo
*/

const family = {
  incomes: [2500, 3200, 250.53, 360],
  expenses: [3220.34, 1528.45, 176.87, 1450.0],
};

function sum(array) {
  let total = 0;
  for (const value of array) {
    total += value;
  }
  return total;
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)
  const total = calculateIncomes - calculateExpenses
  const itsOk = total >= 0
  let balanceText = "negativo"
  if (itsOk) {
    balanceText = "positivo"
  }
  console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
  
}

calculateBalance() 