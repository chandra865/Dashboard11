import "./App.css";
import Sidebar from "./component/Sidebar";
import ProgressBar from "./component/ProgressBar";
import FormSection from "./component/FormSection";
import ClaimForm from "./component/ClaimForm";
function App() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content flex-1 p-6 bg-gray-100 space-y-10">
        <ProgressBar />
        <ClaimForm />
      </div>
    </div>
  );
}

export default App;
