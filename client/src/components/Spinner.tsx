import { Spinner } from "react-bootstrap"

const Loader = () => {

    const content = (
        <Spinner
            animation="border"
            role="statues"
            style={{
                width: '100px',
                height: '100px',
                margin: 'auto',
                display: 'block'
            }}
        />
    )

    return content
}
export default Loader
