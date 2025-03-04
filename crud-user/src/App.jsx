import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import FormData from "./components/Form";


function App() {


  return (
    <div className="app-container">
      <FormData />
      <ToastContainer />
    </div>
  )
}

export default App
