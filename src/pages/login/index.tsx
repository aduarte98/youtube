import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";

function Login() {
    const userContext = useContext(UserContext);

    if (!userContext) {
        throw new Error("UserContext must be used within a UserProvider");
    }

    const { handleLogin } = userContext;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <div>
                login
            </div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => handleLogin(email, password)}>login</button>
        </>
    )
}

export default Login;
