import { SyntheticEvent } from "react";
import { Button, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const SignUpAccessButton = () => {

    const navigate = useNavigate();

    const SignUpButton = (event: SyntheticEvent) => {
        event.preventDefault();
        navigate('/sign-up')         
    }

    const content = (
        <> 
            <Card>
                <Card.Header>Sign Up</Card.Header>
                <Card.Body>
                    <Card.Title>Don't have an account?</Card.Title>
                    <Card.Text>
                        Go ahead and sign up!
                    </Card.Text>
                    <Button onClick={ SignUpButton } variant="primary">Sign up</Button>
                </Card.Body>
            </Card>
      </>
    )

    return content
}

export default SignUpAccessButton 
