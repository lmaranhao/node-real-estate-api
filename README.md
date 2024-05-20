# Very Simple Express Demo
THis is a very simple express demo. What it simple does is that it has 3 endpoints to save, list and find listings. It saves the listings in memory in an array and iterates over this array when you try to find a listing.


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
