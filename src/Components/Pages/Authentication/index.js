import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {GoogleLogin} from "react-google-login";

function AuthenticationPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const clientId = "1087496096534-8k21fnov0p91t7scp4e37fb3clec9f5h.apps.googleusercontent.com";

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    function Herres(){
        window.location.redirect("/registration/index")
    }

    return (

        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
                <p> Nog geen account? Maak er dan een <a onClick={Herres}> hier</a></p>
            </Form>
            <GoogleLogin clientId={clientId} buttonText="Login" style={{marginTop: '100px'}}/>
        </div>
    );
    <script src="https://apis.google.com/js/platform.js" async defer/>

}

export default AuthenticationPage;