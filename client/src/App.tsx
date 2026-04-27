import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { DashboardAdm } from './pages/dashboardAdm';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashboardAdm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
