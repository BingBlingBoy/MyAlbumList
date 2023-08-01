type stateProps = {
    inputtedEmail: string;
    inputtedPassword: string;
}

export const LoginUser = async (state: stateProps ) => {

    try {
        const response = await fetch("http://localhost:3000/api/users/auth", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(state),

        })
        const data = await response.json()

        if (!response.ok) {
            console.log(data)
            throw new Error(data.message) 
        }
    } catch(error) {
        console.log(error)
    }
}
