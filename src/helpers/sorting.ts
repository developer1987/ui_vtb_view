export type SortingOrder = 'asc' | 'desc';
export type SortingValues = 'none' | SortingOrder;

function compare<T>(a: T, b: T, column: keyof T) {
  if (a[column] < b[column]) {
    return -1;
  }
  if (a[column] > b[column]) {
    return 1;
  }
  return 0;
}

export function sortBy<T>(column: keyof T, order: SortingOrder) {
  return (a: T, b: T) => {
    if (order === 'asc') {
      return compare(a, b, column);
    } else {
      return 0 - compare(a, b, column);
    }
  };
}

export function toggleOrder(sorted: SortingValues): SortingOrder {
  if (sorted === 'asc') {
    return 'desc';
  }

  return 'asc';
}