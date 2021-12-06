import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {GoogleLogin} from "react-google-login";


export default function Login()
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const clientId = "1087496096534-0jkenv2onc90je67mo0eh605ct2pclr2.apps.googleusercontent.com";

    function validateForm()
    {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event)
    {
        event.preventDefault();
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
            </Form>
            <GoogleLogin clientId={clientId} buttonText="Login" style={{marginTop: '100px'}}/>
        </div>

    );
}