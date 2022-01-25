import React, { useState } from 'react';
import { ModalFilter } from './ModalFilter.js';

export const SearchButtons = () => {
	const [filterShow, setFilterSow] = useState(false);
	const handleFilterOpen = () => setFilterSow(true);

	return (
		<>
			<button className="btn btn-white" onClick={handleFilterOpen}>
				<span>Sort By</span>
			</button>
			<button className="btn btn-white" onClick={handleFilterOpen}>
				<span>Price</span>
			</button>
			<button className="btn btn-white" onClick={handleFilterOpen}>
				<span>Delivery</span>
			</button>

			<button className="btn btn-white" onClick={handleFilterOpen}>
				<i className="fas fa-sliders-h me-2"></i>
				<span>More Filters</span>
			</button>
			<ModalFilter show={filterShow} setShow={setFilterSow} />
		</>
	);
};
