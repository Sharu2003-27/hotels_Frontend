# Hotel Management React App

This project is a simple Hotel Management Web Application built using React.js. It demonstrates
CRUD operations (Create, Read, Delete) using a backend API and showcases reusable components,
custom hooks, and form handling.

---

## Demo Link <br>
[Live Demo]()  

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

* AddHotelForm
* Hotels
* HotelByTitle

### 2. **useFetch.js** (Custom Hook)

Handles API fetching with:

* `data`
* `loading`
* `error`

Automatically fetches again when URL changes.

### 3. **AddHotelForm.jsx**

A complete hotel form that:

* Uses `useState` to manage form data
* Sends POST request to the backend API
* Handles checkbox, select, and text fields

### 4. **Hotels.jsx**

Displays all hotels fetched using **useFetch**.
Includes:

* Delete button (DELETE request)
* Success message

### 5. **HotelByTitle.jsx**

* Fetches a single hotel by name using **useFetch**.
Displays hotel details if available.

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