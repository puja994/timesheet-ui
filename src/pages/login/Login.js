import React from "react";
import { LoginForm } from "../../components/login/LoginForm";
import "./login.style.css";

const Login = () => {
	return (
		<div className="login-page bg-info">
			<LoginForm />
		</div>
	);
};

export default Login;
