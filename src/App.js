import React from 'react';
import { Display } from './app/components/Display';
import { Products } from './app/components/Products';
import { Sidebar } from './app/components/Sidebar';

function App() {
  return (
    <div>
      <div className="text-center grid grid-cols-12 md:h-screen md:p-4">
        <Display />
        <Products />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;
