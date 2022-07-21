import RegisterForm from "../forms/RegisterForm";
import LoginForm from "../forms/LoginForm";
import { useState } from "react";

const Landing = (props) => {
  const [hasAccount, setHasAccount] = useState(false);
  const { setUser } = props;
  return (
    <div className="d-flex flex-column" style={{ textAlign: "center" }}>
      <div className="d-flex justify-content-center">
        <img
          src="https://images.unsplash.com/photo-1586281380923-93c9b0a7296e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          style={{ width: "350px", height: "200px", margin: "20px" }}
        />
      </div>
      <h4>Register Today!</h4>
      <div className="d-flex justify-content-center">
        {hasAccount === false ? (
          <div>
            <RegisterForm setUser={setUser} />
            <p>
              Already have an account?{" "}
              <span
                className="btn btn-primary"
                onClick={() => setHasAccount(true)}
              >
                Login
              </span>{" "}
            </p>
          </div>
        ) : (
          <LoginForm setUser={setUser} />
        )}
      </div>
    </div>
  );
};

export default Landing;
