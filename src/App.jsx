import Dashboard from "./components/Dashboard/Dashboard";
import { DashboardProvider } from "./DashboardContext";

function App() {
 return (
  <DashboardProvider>
   <div className="min-h-screen bg-gray-100">
    <Dashboard />
   </div>
  </DashboardProvider>
 );
}

export default App;
