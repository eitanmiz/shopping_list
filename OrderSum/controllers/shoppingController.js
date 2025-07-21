import ShoppingList from '../models/ShoppingList.js';

export const saveShoppingList = async (req, res) => {
  try {
    const { userName, userAddress, userEmail, shoppingList } =  req.body  || {};
    if (!userName || !userAddress || !userEmail || !shoppingList || !Array.isArray(shoppingList)) {
      return res.status(400).json({ message: 'קלט לא תקין' });
    }
    const newList = new ShoppingList({ userName, userAddress, userEmail, shoppingList });
    await newList.save();
    res.status(201).json({ message: 'נתונים נשמרו בהצלחה' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'שמירת נתונים נכשלה' });
  }
};

export default { saveShoppingList };
