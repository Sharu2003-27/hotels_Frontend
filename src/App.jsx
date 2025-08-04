import Hotels from './components/Hotels'
import HotelByTitle from './components/HotelByTitle'
import AddHotelForm from './components/AddHotelForm'

function App() {

  return (
    <>
      <AddHotelForm />
      <Hotels />
      <HotelByTitle name="New Hotel"/>
    </>
  )
}

export default App
