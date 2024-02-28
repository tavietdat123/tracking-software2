import { RootRoutes } from "./router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <ToastContainer />
      <RootRoutes />
    </>

  );
}

export default App;
