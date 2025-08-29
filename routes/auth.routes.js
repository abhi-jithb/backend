import {Router} from 'express';

const authRouter = Router();

authRouter.post('/', (req, res) =>{
    res.send({body: {title: 'Auth Home'}})
}); 
authRouter.post('/signup', (req, res) => {
    res.send({body: {title: 'Sign Up'}});
});
authRouter.post('/signin', (req, res) => {
    res.send({body: {title: "Sign in"}})
});
authRouter.post('/signout', (req, res) => {
    res.send({body: {title: "SIGN OUT"}})
    });

export default authRouter;
