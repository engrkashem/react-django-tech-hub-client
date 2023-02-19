import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';

function App() {
  return (
    <div className=" text-center bg-base-200 px-2 lg:px-12">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
