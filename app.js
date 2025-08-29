import express from 'express';
import {PORT} from './config/env.js';
import auth from './routes/auth.routes.js' 
import user from './routes/user.routes.js'
import subscription from './routes/subscription.routes.js'

const app = express();

app.get('/', (req, res) =>{
    res.send('Welcome to TinkerSpace..');
});

app.use('/api/v1/auth', auth);
app.use('/api/v1/user', user);
app.use('/api/v1/subscription', subscription);
app.listen(PORT, () => {
    console.log(`Server running at TinkerSpace on http://localhost:${PORT}`);
})

export default app;


























