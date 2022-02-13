import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Card, Form } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    // axios
    //   .post(`http://localhost:4000/user`, user)
    //   .then((res) => {
    //     console.log("~ res", res)
    //     toastSuccess("User successfully registered");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     toastError("Useris not created try again");
    //   });
    history.push("/");
  };

  return (
    <>u
      <h2>Login Page</h2>
      <Card
        className="d-flex justify-content-center"
        border="Secondary"
        style={{ width: "18rem", alignItems: "center" }}
      >
        <Card.Title className="instagram-logo text-center">
          Instagram
        </Card.Title>
        <Card.Body>
          <Card.Text>
            <Form onSubmit={(e) => HandleSubmit(e)}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Keep me logged in" />
              </Form.Group>
              <button className="btn btn-primary" variant="primary">
                Log In
              </button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Login;
