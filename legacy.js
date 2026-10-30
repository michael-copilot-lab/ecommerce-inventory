const processTransactions = (transactions) =>
  transactions
    .filter(({ value }) => value > 0)
    .map((transaction) => ({
      ...transaction,
      value: transaction.value * 1.2
    }))
    .reduce((total, transaction) => total + transaction.value, 0);

describe('processTransactions', () => {
  test('returns 0 for an empty array', () => {
    expect(processTransactions([])).toBe(0);
  });

  test('ignores negative and zero values', () => {
    const transactions = [
      { id: 1, value: -10 },
      { id: 2, value: 0 },
      { id: 3, value: 5 },
      { id: 4, value: -3 },
      { id: 5, value: 2 }
    ];

    expect(processTransactions(transactions)).toBe(8.4);
  });

  test('processes normal positive transactions', () => {
    const transactions = [
      { id: 'a', value: 100 },
      { id: 'b', value: 50 },
      { id: 'c', value: 25 }
    ];

    expect(processTransactions(transactions)).toBe(210);
  });
});