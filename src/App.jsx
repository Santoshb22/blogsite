import { useEffect } from 'react';
import { account } from './lib/appwrite';

function App() {
  useEffect(() => {
    const checkAppwrite = async () => {
      try {
        const user = await account.get();
        console.log("User info:", user);
      } catch (error) {
        console.error("Appwrite connection error:", error.message);
      }
    };
    checkAppwrite();
  }, []);

  return <h1>Hello from Appwrite Test</h1>;
}

export default App;
