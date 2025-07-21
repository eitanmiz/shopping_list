import React from 'react';
import { useAppSelector } from '../../app/hooks';
import BucketItemsList from '../bucketItems/BucketItemsList';
import SubmitButtons from './SubmitButtons';
import UserForm from './UserForm';
import { config } from '../../config';

const SummaryCard = () => {
  const items = useAppSelector((state) => state.bucket.items);
  const [userName, setName] = React.useState('');
  const [userAddress, setAddress] = React.useState('');
  const [userEmail, setEmail] = React.useState('');

  const handleSubmit = async () => {
    const fullData = {
      userName,
      userAddress,
      userEmail,
      shoppingList: items,
    };

    console.log(fullData)

    const response = await fetch(`${config.apiNodeBaseUrl}/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fullData),
    });

    const result = await response.json();
    console.log('Server response:', result);
    if (response.status != 201)
      throw (result);
  };

  return (
    <div style={{ direction: 'rtl', maxWidth: '400px', margin: '1rem auto' }}>
      <div className='overflow-x-auto mt-6 px-4'>
        <h1 className='text-2xl font-bold mb-4'>סיכום הזמנה</h1>
        <UserForm
          userName={userName}
          userAddress={userAddress}
          userEMail={userEmail}
          setName={setName}
          setAddress={setAddress}
          setEmail={setEmail}
        />
        <BucketItemsList />
        <SubmitButtons handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default SummaryCard;
