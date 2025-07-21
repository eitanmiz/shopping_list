import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import AddButton from '../../components/AddButton';
import QuantityInput from '../../components/QuantityInput';
import BucketItemsList from '../bucketItems/BucketItemsList';
import { addItem } from '../bucketItems/bucketSlice';
import CategorySelector from './CategorySelector';
import ProductInput from './ProductInput';

const AddToBucketForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.items);
  const itemCount = useAppSelector((state) => state.bucket.items.length);
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState<{ value: number; label: string } | null>(null);
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(1);

  const onAdd = () => {
    if (!selectedCategory || !productName || quantity <= 0) {
      alert('אנא בחר קטגוריה, הזן שם מוצר וכמות תקינה');
      return;
    }

    dispatch(
      addItem({
        categoryId: selectedCategory.value,
        categoryName: selectedCategory.label,
        name: productName,
        quantity,
      })
    );

    setProductName('');
    setQuantity(1);
  };

  return (
    <div style={{ direction: 'rtl', maxWidth: '400px', margin: '1rem auto' }}>
      <h3>בחר קטגוריה:</h3>
      <CategorySelector
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {selectedCategory && (
        <div>
          <h3>הוסף מוצר לסל</h3>
          <ProductInput productName={productName} setProductName={setProductName} />
          <QuantityInput quantity={quantity} setQuantity={setQuantity} />
          <AddButton onAdd={onAdd} />
        </div>
      )}

      {itemCount > 0 && (
        <div>
          <BucketItemsList />
          <button
            className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'
            onClick={() => navigate('/summary')}
          >
            המשך...
          </button>
        </div>
      )}
    </div>
  );
};

export default AddToBucketForm;
