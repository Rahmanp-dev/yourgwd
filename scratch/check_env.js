import dotenv from 'dotenv';
dotenv.config();

console.log("GOOGLE_PLACES_API_KEY:", process.env.GOOGLE_PLACES_API_KEY);
console.log("MONGODB_URI:", process.env.MONGODB_URI);
