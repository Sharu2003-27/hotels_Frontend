import useFetch from "../useFetch" 

const HotelByTitle = ({name}) => {
    
      const {data, loading, error } = useFetch(`https://be-4-4-hw-2-hotels-be.vercel.app/hotels/${name}`)

    console.log(data)
    console.log(loading)
    console.log(error);
    
    return data ? (
        <div>
            <h1>{data.name}</h1>
            <p><strong>Location: </strong>{data.location}</p>
            <p><strong>Rating: </strong>{data.rating}</p>
            <p><strong>Price Range: </strong>{data.priceRange}</p>
        </div> ) : (
            loading && <p>Loading...</p>
        )    
}

export default HotelByTitle