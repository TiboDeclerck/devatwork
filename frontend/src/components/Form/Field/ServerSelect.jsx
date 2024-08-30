import React, { useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useFetchOptions } from '../../../api/useFetchOptions';
import debounce from 'lodash/debounce';

export default function ServerSelect({ inputField, field, isEdit, id }) {
  const { register, setValue } = useFormContext();
  const { data: options, error, isLoading, setQuery } = useFetchOptions(field.componentProps.url);
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const isDisabled = !isEdit && !!id;
  const dropdownRef = useRef(null);

  const updateQuery = debounce((value) => {
    setQuery(value);
    setShowDropdown(true);
  }, 300);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    updateQuery(value);
  };

  const handleSelectOption = (option) => {
    setValue(field.name, option);
    setInputValue(option.name);
    setTimeout(() => {
      setShowDropdown(false); 
    }, 0);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    register(field.name, { required: `${field.label} is required` });
    if (inputField.value) {
      setValue(inputField.name, inputField.value);
      setInputValue(inputField.value.name);
    }
  }, [register, setValue, field.name, field.label, inputField.value?.id]);

  return (
    <div className="mb-4 relative" ref={dropdownRef}>
      <input
        type="text"
        value={inputValue || ''}
        onChange={handleInputChange}
        placeholder={`Search ${field.label}`}
        className={`mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 ${
          inputValue ? 'font-normal' : ''
        }`}
        disabled={isDisabled}
        onFocus={() => setShowDropdown(true)}
      />
      {error && <p className="text-red-500 text-sm">Error: {error.message}</p>}
      {showDropdown && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded-md mt-1 w-full max-h-60 overflow-y-auto shadow-lg">
          {isLoading && <li className="p-2">Loading...</li>}
          {!isLoading && options.length === 0 && <li className="p-2">No options found</li>}
          {options.map((option) => (
            <li
              key={option.id}
              className="p-2 cursor-pointer hover:bg-blue-500 hover:text-white font-normal"
              onClick={() => handleSelectOption(option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
