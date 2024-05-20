# Very Simple Express Demo
This is a very simple express demo. It has 3 endpoints to save, list and find listings. It saves the listings in memory, retrieves a listing or finds a `Listing` by id.

# Node version
This project has been coded using 
```
$ node --version        
v21.6.2
```

# Installing dependencies locally
```
npm install
```

# Running the app locally

```
npm start
```
# The Listing Interface

When creating a new `Listing` be aware that all those fields are required in the POST JSON:
```
    title: string;
    price: number;
    description: string;  
```
The id of the saved `Listing` object will be assigned by the application and you should expect an error response if you don't send a valid JSON.

# Testing

Use the curl commands to test the API endpoints:

### Add a New Listing

```
curl -X POST -H "Content-Type: application/json" -d '{"title": "New Listing", "price": 100000, "description": "A new listing"}' http://localhost:3000/listings
```

### Retrieve All Listings

```
curl http://localhost:3000/listings
```

### Delete a Listing

```
curl -X DELETE http://localhost:3000/listings/<id>
```
