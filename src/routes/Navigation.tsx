import { Suspense } from 'react';
import { BrowserRouter, NavLink, Route, Routes, Navigate } from 'react-router-dom';

import logo from 'logo.svg';

import { routes } from './routes';

const Navigation = () => (
  <Suspense fallback={null}>
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="Logo" />
          <ul>
            {routes.map(({ to, name }) => (
              <li key={name}>
                <NavLink to={to} className={({ isActive }) => (isActive ? 'nav-active' : '')}>{name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="/*" element={<Navigate to={routes[0].to} />} />
        </Routes>
      </div>
    </BrowserRouter>
  </Suspense>
);

export default Navigation;
