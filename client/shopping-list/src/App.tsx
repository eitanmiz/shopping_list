import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { getCategories } from './features/categories/categoriesSlice';
import AddToBucketForm from './features/AddToBucket/AddToBucketForm';
import SummaryCard from './features/summary/SummaryCard';


function App() {
  const dispatch = useAppDispatch();
  const { items: categories, status } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getCategories());
    }
  }, [dispatch, status]);

  return (
    <>
      {status === 'succeeded' && (
          <Routes>
            <Route path="/" element={<AddToBucketForm />} />
            <Route path="/summary" element={<SummaryCard />} />
          </Routes>)
      }
    </>
  );
}

export default App;
