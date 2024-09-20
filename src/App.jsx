import ToastPlayground from './components/ToastPlayground/ToastPlayground';
import ToastProvider from './context/ToastProvider/ToastProvider';

function App() {
  return (
    <ToastProvider>
      <ToastPlayground />
    </ToastProvider>
  );
}

export default App;
