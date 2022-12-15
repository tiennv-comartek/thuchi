import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { browserRouter } from "./routes";
import "./assets/style/app.scss";
function App() {
  return (
    <Suspense>
      <RouterProvider router={browserRouter} />
    </Suspense>
  );
}

export default App;
