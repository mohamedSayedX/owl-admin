import logo from "./logo.svg";
import "./App.css";
import AppRoutes from "./Routes/Routes";
import toast, {Toaster} from "react-hot-toast";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import {routes} from "./Routes/routesData";

function App() {
  return (
    <div className=''>
      <DefaultLayout>
        <AppRoutes />
        <Toaster
          containerClassName='toastCon'
          toastOptions={{
            style: {
              zIndex: 99999999999999,
            },
          }}
        />
      </DefaultLayout>
    </div>
  );
}

export default App;
