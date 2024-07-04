import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../styles/OrderForm.css';
import pizzaImage from '../assets/pizza.jpg'; 

const toppingsOptions = [
  { name: 'Peynir', price: 10 },
  { name: 'Mantar', price: 10 },
  { name: 'Biber', price: 10 },
  { name: 'Sucuk', price: 10 },
  { name: 'Zeytin', price: 10 },
  { name: 'Domates', price: 10 },
  { name: 'Soğan', price: 10 },
];

const sizePrices = {
  küçük: 100,
  orta: 150,
  büyük: 200
};

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    size: '',
    crust: '',
    type: '',
    toppings: [],
    specialInstructions: ''
  });

  const [totalPrice, setTotalPrice] = useState(0); 

  const history = useHistory();

  const calculateTotalPrice = () => {
    const basePrice = sizePrices[formData.size] || 0;
    const toppingsPrice = formData.toppings.length * 10;
    setTotalPrice(basePrice + toppingsPrice);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [formData.size, formData.toppings]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const selectedToppings = checked
        ? [...formData.toppings, value]
        : formData.toppings.filter((topping) => topping !== value);
      setFormData((prevFormData) => ({ ...prevFormData, toppings: selectedToppings }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://reqres.in/api/pizza', formData);
      console.log('Order Response:', response.data);
      history.push('/confirmation');
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  return (
    <main className="order-form-container">
      <div className="order-form-image-container">
        <img src={pizzaImage} alt="Delicious Pizza" className="order-form-image" />
      </div>
      <h2>Sipariş Formu</h2>
      <form className="order-form" onSubmit={handleSubmit}>
        <label>
          İsim:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Boyut:
          <select name="size" value={formData.size} onChange={handleChange} required>
            <option value="">Boyut Seçin</option>
            <option value="küçük">Küçük (100 TL)</option>
            <option value="orta">Orta (150 TL)</option>
            <option value="büyük">Büyük (200 TL)</option>
          </select>
        </label>
        <label>
          Hamur Kalınlığı:
          <select name="crust" value={formData.crust} onChange={handleChange} required>
            <option value="">Hamur Kalınlığı Seçin</option>
            <option value="ince">İnce</option>
            <option value="orta">Orta</option>
            <option value="kalın">Kalın</option>
          </select>
        </label>
        <label>
          Pizza Türü:
          <select name="type" value={formData.type} onChange={handleChange} required>
            <option value="">Pizza Türü Seçin</option>
            <option value="acılı">Acılı</option>
            <option value="acısız">Acısız</option>
            <option value="peynirli">Peynirli</option>
            <option value="karışık">Karışık</option>
          </select>
        </label>
        <label>
          Ek Malzemeler:
          <div className="toppings">
            {toppingsOptions.map((topping) => (
              <label key={topping.name}>
                <input
                  type="checkbox"
                  name="toppings"
                  value={topping.name}
                  onChange={handleChange}
                /> {topping.name} (+{topping.price} TL)
              </label>
            ))}
          </div>
        </label>
        <label>
          Özel Talimatlar:
          <textarea name="specialInstructions" value={formData.specialInstructions} onChange={handleChange}></textarea>
        </label>
        <div className="total-price">Toplam Fiyat: {totalPrice} TL</div>
        <button type="submit">Sipariş Ver</button>
      </form>
    </main>
  );
};

export default OrderForm;
