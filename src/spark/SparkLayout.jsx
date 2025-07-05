import SparkNavbar from './components/SparkNavbar';
import SparkFooter from './components/SparkFooter';
import { Outlet } from 'react-router-dom';

const SparkLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SparkNavbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <SparkFooter />
    </div>
  );
};

export default SparkLayout;
