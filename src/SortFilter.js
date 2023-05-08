import React, { useState } from 'react';
import Slider from 'rc-slider';
import Select from 'react-select';

const SortFilter = () => {
  const sliderStyle = { width: '100%', margin: '1rem 0' };

  const countries = [
    { value: 'country1', label: 'Country 1' },
    { value: 'country2', label: 'Country 2' },
    { value: 'country3', label: 'Country 3' },
    // Add more countries as objects here
  ];

  const [useSalarySlider, setUseSalarySlider] = useState(false);

  return (
    <div className="bg-white p-4 rounded-md shadow-md w-full md:w-1/3 mb-4 md:mb-0">
      <h2 className="text-xl font-semibold mb-3">Filters:</h2>
      <div className="mb-5">
        <label htmlFor="country" className="block mb-1">Country:</label>
        <Select
          id="country"
          options={countries}
          isMulti
          className="w-full"
        />
      </div>

      <div className="mb-5">
        <label className="inline-flex items-center mb-1">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={useSalarySlider}
            onChange={() => setUseSalarySlider(!useSalarySlider)}
          />
          <span className="ml-2">Use salary filter</span>
        </label>
        {useSalarySlider && (
          <>
            <label htmlFor="salary" className="block mb-1">Salary:</label>
            <div style={sliderStyle}>
              <Slider
                min={30000}
                max={300000}
                defaultValue={30000}
                marks={{
                  30000: '$30k',
                  100000: '$100k',
                  200000: '$200k',
                  300000: '$300k',
                }}
                step={1000}
                trackStyle={{ backgroundColor: '#4299e1' }}
                handleStyle={{ borderColor: '#4299e1' }}
                railStyle={{ backgroundColor: '#e2e8f0' }}
              />
            </div>
          </>
        )}
      </div>

      <h2 className="text-xl font-semibold mb-3">Sort by:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-5">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">Cost of Living</span>
        </label>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">Cost of Living</span>
        </label>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">Cost of Living</span>
        </label>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">Cost of Living</span>
        </label>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">Cost of Living</span>
        </label>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">Cost of Living</span>
        </label>
        {/* Add more checkboxes for other sorting options */}
      </div>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Apply Filters & Sort
      </button>
    </div>
  );
};

export default SortFilter;