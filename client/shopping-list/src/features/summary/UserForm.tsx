import React from 'react';

interface Props {
  userName: string;
  userAddress: string;
  userEMail: string;
  setName: (name: string) => void;
  setAddress: (address: string) => void;
  setEmail: (email: string) => void;
}

const UserForm: React.FC<Props> = ({
  userName,
  userAddress,
  userEMail,
  setName,
  setAddress,
  setEmail,
}) => (
  <>
    <input
      type='text'
      placeholder='שם פרטי ומשפחה'
      value={userName}
      onChange={(e) => setName(e.target.value)}
      style={{ width: '100%', marginTop: '8px', padding: '8px' }}
    />
    <input
      type='text'
      placeholder='כתובת מלאה'
      value={userAddress}
      onChange={(e) => setAddress(e.target.value)}
      style={{ width: '100%', marginTop: '8px', padding: '8px' }}
    />
    <input
      type='text'
      placeholder='מייל'
      value={userEMail}
      onChange={(e) => setEmail(e.target.value)}
      style={{ width: '100%', marginTop: '8px', padding: '8px' }}
    />
  </>
);

export default UserForm;
