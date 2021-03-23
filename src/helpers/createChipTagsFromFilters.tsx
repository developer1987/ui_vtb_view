import {IItemChipTag} from '@openvtb/react-ui-kit';
import {mapKeyToString} from './mapKeyToString';

export function createChipTagsFromFilters<
  T,
  L extends { [x: string]: string },
  V extends {
    [K in keyof T]: { [x: string]: string };
  }
>(filters: T, keyLabels: L, valueLabels: V) {
  const listData: IItemChipTag[] = [];

  Object.entries(filters).forEach(([key, value]) => {
    if (typeof value === 'boolean' && value) {
      return listData.push({
        id: JSON.stringify({key, value}),
        label: mapKeyToString(key, keyLabels),
      });
    }

    if (typeof value === 'string' && value !== '') {
      return listData.push({
        id: JSON.stringify({key, value}),
        label: `${mapKeyToString(key, keyLabels)}: ${mapKeyToString(
            value,
            valueLabels[key as keyof T]
        )}`,
      });
    }

    if (Array.isArray(value)) {
      value.forEach((item) => {
        listData.push({
          id: JSON.stringify({key, value: item}),
          label: `${mapKeyToString(key, keyLabels)}: ${mapKeyToString(
              item,
              valueLabels[key as keyof T]
          )}`,
        });
      });
    }
  });
  return listData;
}
