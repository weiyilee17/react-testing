import './App.css';
// import Application from './components/application/application';
import MuiMode from './components/mui/mui-mode';
import AppProviders from './providers/app-providers';

function App() {
  return (
    <AppProviders>
      <MuiMode />
    </AppProviders>
  );
}

export default App;
