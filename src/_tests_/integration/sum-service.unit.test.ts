import SumService from '../../sum-service/sum-service';

describe('Sum Tests', () => {
  const sum = new SumService();

  test('Syncronously validate 1 + 2 = 3', () => {
    expect(sum.GetSumSync(1, 2)).toBe(3);
  });
  test('Asncronously validate 1 + 2 = 3', async () => {
    expect.assertions(1);
    await expect(sum.GetSumAsync(1, 2)).resolves.toBe(3);
  });
  test('Syncronously throw an error', () => {
    expect(sum.GetSumSync(1, 2)).toBe(3);
  });
  test('Asncronously throw an error', async () => {
    expect.assertions(1);
    await expect(sum.GetSumAsync(1, 2)).resolves.toBe(3);
  });
});
