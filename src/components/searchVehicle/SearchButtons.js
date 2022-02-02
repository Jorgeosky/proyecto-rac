import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ModalFilter } from './ModalFilter';

export function SearchButtons() {
  const [filterShow, setFilterShow] = useState(false);
  const navigate = useNavigate();
  const handleFilterOpen = () => setFilterShow(true);
  const handleFilterRemove = () => navigate('/search');
  return (
    <>
      <button className="btn btn-white" onClick={handleFilterOpen} type="button" c>
        <i className="fas fa-sliders-h me-2" />
        <span>Filters</span>
      </button>
      <button className="btn btn-white" onClick={handleFilterRemove} type="button" c>
        <span>Remove Filters</span>
      </button>
      <ModalFilter setShow={setFilterShow} show={filterShow} />
    </>
  );
}
