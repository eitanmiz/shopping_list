import React, { useEffect } from 'react';
import Select from 'react-select';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getCategories } from './categoriesSlice';

interface OptionType {
  value: number;
  label: string;
}

const CategoriesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  // Map categories to react-select options
  const options: OptionType[] = items.map(cat => ({
    value: cat.categoryId,
    label: cat.name,
  }));

  const handleChange = (selectedOption: OptionType | null) => {
    console.log('Selected:', selectedOption);
  };

  if (status === 'loading') return <p>טוען...</p>;
  if (status === 'failed') return <p>שגיאה: {error}</p>;

  return (
    <div style={{ direction: 'rtl', maxWidth: '300px', margin: '1rem auto' }}>
      <h2>קטגוריות</h2>
      <Select
        options={options}
        onChange={handleChange}
        placeholder="בחר קטגוריה"
        isClearable
        styles={{
          menuPortal: base => ({ ...base, zIndex: 9999 }),
          control: base => ({ ...base, direction: 'rtl' }),
          menu: base => ({ ...base, direction: 'rtl' }),
        }}
        menuPortalTarget={document.body}
      />
    </div>
  );
};

export default CategoriesList;
