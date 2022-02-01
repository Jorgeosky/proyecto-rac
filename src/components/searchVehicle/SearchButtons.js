import React, { useState } from 'react';
import { ModalFilter } from './ModalFilter';

export function SearchButtons() {
  const [filterShow, setFilterSow] = useState(false);
  const handleFilterOpen = () => setFilterSow(true);

  return (
    <>
      <button className="btn btn-white" onClick={handleFilterOpen} type="button" c>
        <span>Sort By</span>
      </button>
      <button className="btn btn-white" onClick={handleFilterOpen} type="button" c>
        <span>Price</span>
      </button>
      <button className="btn btn-white" onClick={handleFilterOpen} type="button" c>
        <span>Delivery</span>
      </button>

      <button className="btn btn-white" onClick={handleFilterOpen} type="button" c>
        <i className="fas fa-sliders-h me-2" />
        <span>More Filters</span>
      </button>
      <ModalFilter setShow={setFilterSow} show={filterShow} />
    </>
  );
}
