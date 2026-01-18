# Hotel Management React App

This project is a simple Hotel Management Web Application built using React.js. It demonstrates
CRUD operations (Create, Read, Delete) using a backend API and showcases reusable components,
custom hooks, and form handling.

---

## Demo Link <br>
[Live Demo](https://hotels-frontend-five.vercel.app/)  

---

## Quick Start

```
git clone https://github.com/Sharu2003-27/hotels_Frontend.git
cd <hotels_Frontend>
npm install
npm run dev   
```
---

## Technologies
- React JS
- Node.js
- Express.js
- CORS
- MongoDB

---

## Demo Video
Watch a walkthrough (4 min) of all major features of this app:
[Loom Video Link]()

---

## Features

**Hotel Management**
- Allows users to add new hotels using a dedicated form
- Displays a list of all hotels fetched from the backend
- Fetches and displays hotel details by hotel title

**Custom Hook – useFetch**
- Fetches data from backend APIs
- Manages loading and error states
- Automatically refetches data when the API URL changes

**Add Hotel Form**
- Collects hotel details using controlled form inputs
- Manages form state using React useState
- Sends a POST request to create a new hotel
- Handles text inputs, dropdowns, and checkboxes

**Hotels Listing**
- Displays all hotels using data fetched through the custom hook
- Deletes a hotel using a DELETE API request
- Shows a success message after successful deletion

**Hotel By Title**
- Fetches hotel details by hotel name using the custom hook
- Displays hotel information when data is available

---

## API Reference
### **GET /hotels**<br>	 
Fetch all hotels<br>	 
Sample Response:<br>
```[{ _id, name, location, priceRnage, ...}]```

### **GET /hotels/:hotelName**<br>	 	
Fetch hotel by name<br>		
Sample Response:<br>
```{ _id, name, ... }```

### **GET  /hotels/category/:categoryName** <br>
Fetch hotels by category<br>
Sample Response:<br>
```[{_id, name, category, }]```

### **POST   | `/hotels` **<br> 	
Add new hotel<br>	
Sample Response:<br>
```{ _id, name, location, location, reviews, website, ... }```

### **POST /hotels/:hotelId**<br>  	
Update existing hotel<br> 	 
Sample Response:<br> 
```{ _id, name, location, location, reviews, ... }```

## Contact
For bugs or feature requests, please reach out to sharayu.borude27@gmail.com
