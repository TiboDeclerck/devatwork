import React from 'react';
import './index.css'

export default function LinearProgress() {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 overflow-hidden relative">
      <div
        className="absolute left-0 top-0 h-2.5 bg-blue-600 rounded-full animate-progress"
        style={{ width: '100%' }}
      ></div>
    </div>
  );
}
