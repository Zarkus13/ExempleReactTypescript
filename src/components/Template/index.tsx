import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Routing from 'routes'

const HomeNav: React.FC = () =>
  <div>Home page</div>;

const TestNav: React.FC = () =>
  <div>/test page</div>;

const Template: React.FC = () => {
  return (
    <div>
      <header>Template header</header>

      <nav>
        <Routes>
          <Route path="/" element={<HomeNav/>}/>
          <Route path="/test/:message" element={<TestNav/>}/>
        </Routes>
      </nav>

      <Routing/>
    </div>
  );
};

export default Template;