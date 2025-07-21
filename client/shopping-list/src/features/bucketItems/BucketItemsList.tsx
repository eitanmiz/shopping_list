import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { groupByCategory } from '../../utils/groupByCategory';
import { BucketItem } from './bucketSlice';

const BucketItemsList = () => {
  const items = useAppSelector((state) => state.bucket.items);
  const grouped = groupByCategory(items);
  const categoryNames = Object.keys(grouped);

  const maxRows = Math.max(...categoryNames.map((cat) => grouped[cat].length));

  const rows: (BucketItem | null)[][] = Array.from({ length: maxRows }, (_, rowIndex) =>
    categoryNames.map((cat) => grouped[cat][rowIndex] ?? null)
  );

  if (items.length === 0) return null;

  return (
    <div className="overflow-x-auto mt-6 px-4">
      <table
        className="border-collapse text-right w-full"
        dir="rtl"
        style={{ borderSpacing: '32px 0', backgroundColor: 'lightyellow'}}
      >
        <thead>
          <tr>
            {categoryNames.map((category) => (
              <th key={category} className="align-top">
                <div className="w-full py-2 px-4 rounded-lg font-semibold shadow text-center" style={{ backgroundColor: 'lightblue', color: 'white' }}>
                  {category}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((rowItems, rowIndex) => (
            <tr key={rowIndex}>
              {rowItems.map((item, colIndex) => (
                <td
                  key={colIndex}
                  className="align-top text-sm rounded p-2"
                  style={{ backgroundColor: colIndex % 2 === 0 ? 'lightgray' : 'white' }}
                >
                  {item ? (
                    <div className="border rounded p-2 shadow-sm bg-white">
                      <div className="font-medium">{item.name} - {item.quantity}</div>
                    </div>
                  ) : (
                    <div className="text-gray-300">&nbsp;</div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BucketItemsList;
