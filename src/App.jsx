import { Suspense } from "react";

import AppRoutes from "./routes/AppRoutes";
import WhatsAppButton from "./Components/common/WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <>
      <WhatsAppButton />
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </>
  );
}

export default App;