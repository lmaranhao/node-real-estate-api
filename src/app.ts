import express, { Request, Response } from 'express';
import { Listing } from './listing';

const port = 3000;

const app = express();
app.use(express.json());

const listings: Listing[] = [];

app.post('/listings', (req: Request, res: Response) => {
    const newListing: Listing = req.body;
    newListing.id = `${Date.now()}`; // generate a unique ID
    listings.push(newListing);
    res.status(201).json(newListing);
});

app.get('/listings', (req: Request, res: Response) => {
    res.json(listings);
});

app.delete('/listings/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const index = listings.findIndex((listing) => listing.id === id);
    if (index !== -1) {
        listings.splice(index, 1);
        res.status(204).json({ message: 'Listing deleted successfully' });
    } else {
        res.status(404).json({ message: 'Listing not found' });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});