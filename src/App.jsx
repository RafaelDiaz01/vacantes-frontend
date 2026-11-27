import AuthProvider from "./auth/AuthProvider.jsx";
import AppRouter from "./routes/AppRouter.jsx";

function App() {
  return (
    <AuthProvider>
      <AppRouter />;
    </AuthProvider>
  );
}

export default App;