import {SortingOrder} from 'src/data-layer/application/types';

export function sortBy<T>(column: keyof T, order: SortingOrder) {
  return (a: T, b: T) => {
    const compare = () => {
      if (a[column] < b[column]) {
        return -1;
      }
      if (a[column] > b[column]) {
        return 1;
      }
      return 0;
    };

    if (order === 'asc') {
      return compare();
    } else {
      return 0 - compare();
    }
  };
}
