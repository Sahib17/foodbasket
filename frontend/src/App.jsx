import axios from "axios";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    const login = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/login",
          {
            email: "sahibjeet.user1@example.com",
            password: "UserPass123"
          },
          {
            withCredentials: true
          }
        );

        console.log("Login Success:", response.data);
      } catch (error) {
        console.log("Login Error:", error.response?.data || error.message);
      }
    };

    login();
  }, []);

  return <div>Check console for login result</div>;
}

export default App;
