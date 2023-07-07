import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { getSearchQueryData } from "../../services/SearchQuery"

const Search = () => {

    interface responseInformation {
        name: string,
        images: {
            [key: number]: image,
            length: number,
        }
    }

    interface image {
        height: number,
        url: string,
    }

    const [response, setResponse] = useState([] as responseInformation[])

    const { state } = useLocation();

    useEffect(() => {
        const settingSearchQuery = () => {
            getSearchQueryData(state).then(data => setResponse(data))
        }

        settingSearchQuery()

    }, [state])

    const content = (
        <>
            <h1>THIS IS THE SEARCHBAR</h1>
            <br></br>
            {response.map( (data, i) => {
                return (
                    <div className="card" key={i}>
                        <div className="card-body" key={i}>
                            <h1>{data.name}</h1>
                            {data.images.length !== 0 ? <img src={data.images[2].url} alt="image of search field" /> : <h2>No image</h2> }
                        </div>
                    </div>
                 )
            })}
        </>
    )

    return content
}
export default Search
