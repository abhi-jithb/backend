import Router from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) =>{
    res.send({body: {title: 'GETS all users'}});
})

userRouter.get('/:id', (req, res) =>{
    res.send({body: {title: 'GETS user details by id'}});
})


userRouter.post('/', (req, res) =>{
    res.send({body: {title: 'CREATES a new user'}});
})

userRouter.put('/:id', (req, res) =>{
    res.send({body: {title: 'Updates a specific user'}});
});

userRouter.delete('/:id', (req, res) =>{
    res.send({body: {title: 'Delete a user'}});
})
export default userRouter;
