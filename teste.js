const transactions = [
  {
    "title": "Salário",
    "value": 4000,
    "type": "income"
  },
  {
    "title": "Salário",
    "value": 8000,
    "type": "income"
  },
  {
    "title": "Salário",
    "value": 8000,
    "type": "outcome"
  }
];

const income = transactions
      .filter(({ type, value }) => type === 'income')
      .reduce((sum, value) => sum + value);

// const income = transactions.filter(transaction => {
//   return transaction.type === 'income';
// }).reduce((sum, income) => sum + income.value);

console.log(income);
