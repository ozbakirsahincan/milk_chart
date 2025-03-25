import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewInput = () => {
  const navigate = useNavigate();

  return (
    <button 
      className="btn btn-primary mb-3"
      onClick={() => navigate('/create')}
    >
      Yeni Kayıt Ekle
    </button>
  );
};

export default NewInput;