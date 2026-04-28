import { Route, Routes } from 'react-router-dom';

import { DashboardAdm } from '../../pages/Dashboard/dashboardAdm';

export const DashboardRoutes = () => {
  return(
      <Routes>
        <Route path="/adm" element={<DashboardAdm />} />
      </Routes>
  );
}