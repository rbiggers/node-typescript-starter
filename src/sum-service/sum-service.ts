export default class SumService {
  private sum = (a: number, b: number): number => a + b;

  /**
   *  Syncronously adds two numbers
   *
   * @param {number} a The first number to add
   * @param {number} b The second number to add
   * @returns {number} The sum of a and b
   *
   * @throws Will throw an error
   */
  GetSumSync = (a: number, b: number): number => {
    try {
      return this.sum(a, b);
    } catch (error) {
      throw error;
    }
  };

  /**
   *  Asyncronously adds two numbers
   *
   * @param {number} a The first number to add
   * @param {number} b The second number to add
   * @returns {number} The sum of a and b
   *
   * @throws Will throw an error
   */
  GetSumAsync = (a: number, b: number): Promise<number> => {
    return new Promise((resolve, reject): void => {
      try {
        setTimeout(() => {
          resolve(this.sum(a, b));
        }, 3000);
      } catch (error) {
        reject(error);
      }
    });
  };
}
