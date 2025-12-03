import React, { useState } from "react"
import useFetch from "../useFetch"

const Hotels = () => {
    const [successMessage, setSuccessMessage] = useState("")
    const {data, loading, error } = useFetch("https://be-4-4-hw-2-hotels-be.vercel.app/hotels")
    console.log(data);
    
    console.log(error);

    const handleDelete = async (hotelId) => {
        try {
            const response = await fetch(`https://be-4-4-hw-2-hotels-be.vercel.app/hotels/${hotelId}`,
                { method: "DELETE"},
            )

            if (!response.ok) {
                throw "Failed to delete hotel."
            }
            
            const data = await response.json()
            if (data) {
                setSuccessMessage("Hotel deleted successfully.")
                window.location.reload()
            }
        } catch (error) {
            console.log(error);
        }  
    }
     
    return (
    <>
        <h1>All Hotels</h1>
        {loading && <p>Loading...</p>}
        {data?.error && <p>{data?.error}</p>}
        <ul>
            {data?.map((hotel) => (
                <li>{hotel.name}
                <button onClick={() => handleDelete(hotel._id)}>Delete</button>
                </li>
            ))}
        </ul>
        <p>{successMessage}</p>
     </>
    )
}

export default Hotels