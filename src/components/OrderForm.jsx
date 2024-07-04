import React, { useState } from 'react';
import axios from 'axios';
import '../styles/OrderForm.css';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    size: '',
    toppings: [],
    specialInstructions: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://reqres.in/api/pizza', formData);
      console.log('Order Response:', response.data);
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <label>
        İsim:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Boyut:
        <select name="size" value={formData.size} onChange={handleChange} required>
          <option value="">Boyut Seçin</option>
          <option value="small">Küçük</option>
          <option value="medium">Orta</option>
          <option value="large">Büyük</option>
        </select>
      </label>
      <label>
        Malzemeler:
        <input type="checkbox" name="toppings" value="Peynir" onChange={handleChange} /> Peynir
        <input type="checkbox" name="toppings" value="Mantar" onChange={handleChange} /> Mantar
        <input type="checkbox" name="toppings" value="Biber" onChange={handleChange} /> Biber
        <input type="checkbox" name="toppings" value="Sucuk" onChange={handleChange} /> Sucuk
      </label>
      <label>
        Özel Talimatlar:
        <textarea name="specialInstructions" value={formData.specialInstructions} onChange={handleChange}></textarea>
      </label>
      <button type="submit">Sipariş Ver</button>
    </form>
  );
};

export default OrderForm;
