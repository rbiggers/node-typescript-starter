import SumService from './sum-service/sum-service';

const sum = new SumService();

console.log('Sum :=', sum.GetSumSync(1, 2));

sum
  .GetSumAsync(1, 2)
  .then(result => console.log('Sum :=', result))
  .catch(error => console.log('Sum :=', error));
