import React from "react";
import Routes from "./routes";
import Theme from './theme/theme';
import { themeModes } from './constants';
import { rootStore, StoreProvider } from './stores';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <StoreProvider value={rootStore} displayName="MobxStoreContext">
      <Theme themeMode={themeModes.LIGHT}>
        <Routes />
        <ToastContainer
          position="top-center"
          newestOnTop
          hideProgressBar
          autoClose={3000}
          pauseOnFocusLoss={false}
        />
      </Theme>
    </StoreProvider>
  );
}

export default App;
