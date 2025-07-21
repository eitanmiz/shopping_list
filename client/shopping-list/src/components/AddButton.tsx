import React from 'react';

interface Props {
  onAdd: () => void;
}

const AddButton: React.FC<Props> = ({ onAdd }) => (
  <button
    onClick={onAdd}
    style={{
      marginTop: '12px',
      width: '100%',
      padding: '10px',
      cursor: 'pointer',
    }}
  >
    הוסף לסל
  </button>
);

export default AddButton;
