import React from 'react';
import Select from 'react-select';

interface Props {
  categories: { categoryId: number; name: string }[];
  selectedCategory: { value: number; label: string } | null;
  setSelectedCategory: (value: { value: number; label: string } | null) => void;
}

const CategorySelector: React.FC<Props> = ({ categories, selectedCategory, setSelectedCategory }) => {
  const categoryOptions = categories.map((cat) => ({
    value: cat.categoryId,
    label: cat.name,
  }));

  return (
    <Select
      options={categoryOptions}
      value={selectedCategory}
      onChange={(option) => setSelectedCategory(option)}
      placeholder='בחר קטגוריה'
      isClearable
      styles={{
        control: (base) => ({ ...base, direction: 'rtl' }),
        menu: (base) => ({ ...base, direction: 'rtl' }),
      }}
    />
  );
};

export default CategorySelector;
