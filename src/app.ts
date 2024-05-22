import express, { Request, Response } from 'express';
import { Listing } from './listing';

const port = 3000;

const app = express();
app.use(express.json());

const listings = new Map<string, Listing>();

app.post('/listings', (req: Request, res: Response) => {
    const newListing: Listing = req.body;

    if (!newListing.title || !newListing.price || !newListing.description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    if(typeof newListing.price !== 'number' || newListing.price <= 0) {
      return res.status(400).json({ error: 'Price must be a positive number' });
    }
    newListing.id = `${Date.now()}`; // generate a unique ID
    listings.set(newListing.id, newListing);
    res.status(201).json(newListing);
});

app.get('/listings', (req: Request, res: Response) => {
    const allListings: Listing[] = Array.from(listings.values());
    res.json(allListings);
});

app.delete('/listings/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    if (listings.has(id)) {
      listings.delete(id);
      res.status(204).send();
    } else {
        return res.status(404).json({ error: 'Listing not found' });
    }
  });

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});