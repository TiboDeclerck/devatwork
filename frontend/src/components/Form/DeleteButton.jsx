import React, { useState } from 'react';
import useCurrentPath from '../../hooks/useCurrentPath';
import Delete from '@mui/icons-material/DeleteForever';
import { useDelete } from '../../api/useDelete';
import { useNavigate } from 'react-router-dom';

export default function DeleteButton() {
  const { path, isEdit } = useCurrentPath();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mutation = useDelete(`/${path}`, path);

  const handleDelete = () => {
    mutation.mutate();
    setIsModalOpen(false);
  };

  return (
    <>
      {isEdit && (
        <>
          <button
            className="flex items-center space-x-2 text-red-600 hover:text-red-800"
            onClick={() => setIsModalOpen(true)}
          >
            <Delete />
            <span>Delete</span>
          </button>

          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-xl font-semibold text-gray-800">
                  Are you sure you want to delete this?
                </h2>
                <p className="text-gray-600 mt-2">
                  This action cannot be undone.
                </p>
                <div className="mt-4 flex justify-end space-x-4">
                  <button
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
