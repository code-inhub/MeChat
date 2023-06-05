import './App.css';
import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';

function App() {
  
  const clientId =
    "415876876541-mocrij6uvf42c0g22rpkmu8sdnbl9mm3.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
       <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
