import { Container, Button, Form } from 'react-bootstrap';
import { useState } from 'react';

function Login(props: any) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const sendAuth = () => {
        const user = { username: username, password: password }
        props.getUser(user);
    }

    const handleChange = (event: any) => {
        let target = event.target.name;
        target == 'name' ? setUsername(event.target.value) : setPassword(event.target.value);
    }

    return (
        <Container>
            <p>This is a restricted content, please sign in below to view.</p>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter Username" onChange={(e) => handleChange(e)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="pass" type="password" placeholder="Password" onChange={(e) => handleChange(e)} />
                </Form.Group>
                <Button variant="primary" type="button" onClick={sendAuth}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Login;