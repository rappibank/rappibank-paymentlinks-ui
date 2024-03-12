import Routes from './routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster position='bottom-center' reverseOrder={false} />
      <Routes />
    </>
  );
}

export default App;
