import {ISelectComponentItem} from '@openvtb/react-ui-kit';
import {sortBy} from './sorting';

export function listToItems<T>(
    items: T[],
    mapper: (item: T, index: number, array: T[]) =>
    [label: string, value: string]
): ISelectComponentItem[] {
  const result: ISelectComponentItem[] = items
      .map((...args) => {
        const [label, value] = mapper(...args);
        return {label, value};
      })
      .sort(sortBy<ISelectComponentItem>('label', 'asc'));
  return result;
}

export function itemsToValues(value: ISelectComponentItem[]): string[] {
  debugger;
  return value.map((item) => item.value);
}
