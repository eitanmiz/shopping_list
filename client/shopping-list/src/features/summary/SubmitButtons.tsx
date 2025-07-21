import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { clearItems } from '../bucketItems/bucketSlice';

interface Props {
  handleSubmit: () => Promise<void>;
}

const SubmitButtons: React.FC<Props> = ({ handleSubmit }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  const onConfirmClick = async () => {
    try {
      await handleSubmit(); // await the async function
      dispatch(clearItems())
      navigate('/')
    } catch (err) {
      console.error('Error:', err);
      alert(err.message);
    }
  };

  return (
    <>
      <button
        className='mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
        onClick={onConfirmClick}
      >
        אשר
      </button>
      <button
        className='mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
        onClick={() => navigate('/')}
      >
        חזור
      </button>
    </>
  );
};

export default SubmitButtons;


