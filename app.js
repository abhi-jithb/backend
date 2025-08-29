import express from 'express';
import {PORT} from './config/env.js';

const app = express();

app.get('/', (req, res) =>{
    res.send('Welcome to TinkerSpace..');
});

app.listen(PORT, () => {
    console.log(`Server running at TinkerSpace on http://localhost: ${PORT} `);
})

export default app;


























