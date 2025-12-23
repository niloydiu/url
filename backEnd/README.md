Backend quick notes

- The server expects `MONGODB_URI` in `.env` pointing to MongoDB (the code appends `/shortUrl`).
- If you get `MongoServerError: bad auth : authentication failed` update the credentials or use a local MongoDB URI like `mongodb://localhost:27017`.
- Start server: `npm install` then `npm run dev`.
