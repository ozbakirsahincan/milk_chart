import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: '',
    end_date: '',
    pee: 'yok',
    poop: 'yok',
    breastfeeding: 'yok',
    total_milk: '',
    drinking_milk: '',
    remaining_milk: '',
    user: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Otomatik kalan mama hesaplama
    if (name === 'total_milk' || name === 'drinking_milk') {
      const total = name === 'total_milk' ? Number(value) : Number(formData.total_milk);
      const drinking = name === 'drinking_milk' ? Number(value) : Number(formData.drinking_milk);
      
      if (total && drinking) {
        setFormData(prev => ({
          ...prev,
          remaining_milk: total - drinking
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/chart', formData);
      console.log('Sunucu yanıtı:', response);  // Yanıtı konsola yazdır
      
      if (response.status === 201) {
        console.log('Kayıt başarılı, ana sayfaya yönlendiriliyor...');
        navigate('/');
      }
    } catch (error) {
      console.error('Veri eklenirken hata oluştu:', error.response || error);
      // Kullanıcıya hata mesajını göster
      alert('Veri eklenirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Yeni Kayıt Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Başlangıç Saati</label>
            <input
              type="time"
              className="form-control"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Bitiş Saati</label>
            <input
              type="time"
              className="form-control"
              name="end_date"
              value={formData.end_date}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label">Çiş</label>
            <select
              className="form-select"
              name="pee"
              value={formData.pee}
              onChange={handleChange}
            >
              <option value="yok">Yok</option>
              <option value="var">Var</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Kaka</label>
            <select
              className="form-select"
              name="poop"
              value={formData.poop}
              onChange={handleChange}
            >
              <option value="yok">Yok</option>
              <option value="var">Var</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Emzirme</label>
            <select
              className="form-select"
              name="breastfeeding"
              value={formData.breastfeeding}
              onChange={handleChange}
            >
              <option value="yok">Yok</option>
              <option value="var">Var</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label">Yapılan Mama (ml)</label>
            <input
              type="number"
              className="form-control"
              name="total_milk"
              value={formData.total_milk}
              onChange={handleChange}
              min="0"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">İçilen Mama (ml)</label>
            <input
              type="number"
              className="form-control"
              name="drinking_milk"
              value={formData.drinking_milk}
              onChange={handleChange}
              min="0"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Kalan Mama (ml)</label>
            <input
              type="number"
              className="form-control"
              name="remaining_milk"
              value={formData.remaining_milk}
              disabled
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Kullanıcı</label>
          <input
            type="text"
            className="form-control"
            name="user"
            value={formData.user}
            onChange={handleChange}
            required
          />
        </div>

        <div className="d-flex gap-2">
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>
            İptal
          </button>
          <button type="submit" className="btn btn-primary">
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;