import { BucketItem } from '../features/bucketItems/bucketSlice';

export function groupByCategory(items: BucketItem[]) {
  const grouped: Record<string, BucketItem[]> = {};

  for (const item of items) {
    const key = item.categoryName || 'קטגוריה לא ידועה';
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(item);
  }

  return grouped;
};
