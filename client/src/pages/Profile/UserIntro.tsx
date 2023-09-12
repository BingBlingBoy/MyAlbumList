import { useEffect, useState } from "react";
import { Card } from "react-bootstrap"
import { useSelector } from "react-redux"

const UserIntro = () => {

    const [username, setUsername] = useState("")
    const { userInfo } = useSelector((state: any) => state.auth);

    useEffect(() => {
        setUsername(userInfo.name)
    }, [userInfo.name])

    const content = (
        <>
        <Card className="mb-4">
            <Card.Body className="text-center">
                <Card.Title>{username}</Card.Title>
            </Card.Body>
        </Card>
        </>
    )

    return content
}

export default UserIntro 
