import React from 'react';

interface Props {
  productName: string;
  setProductName: (value: string) => void;
}

const ProductInput: React.FC<Props> = ({ productName, setProductName }) => (
  <input
    type='text'
    placeholder='שם מוצר'
    value={productName}
    onChange={(e) => setProductName(e.target.value)}
    style={{ width: '100%', marginTop: '8px', padding: '8px' }}
  />
);

export default ProductInput;
