import React from 'react';

interface Props {
  quantity: number;
  setQuantity: (value: number) => void;
}

const QuantityInput: React.FC<Props> = ({ quantity, setQuantity }) => {
  return (
    <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center' }}>
      <button
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
        style={{ padding: '4px 8px' }}
        type="button"
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
        min={1}
        style={{
          width: '60px',
          textAlign: 'center',
          margin: '0 8px',
          padding: '8px',
        }}
      />
      <button
        onClick={() => setQuantity(quantity + 1)}
        style={{ padding: '4px 8px' }}
        type="button"
      >
        +
      </button>
    </div>
  );
};

export default QuantityInput;
