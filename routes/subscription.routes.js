import Router from 'express'

const subRouter = Router();

subRouter.get('/', (req, res) =>{
    res.send({body: {title: 'GETS all subscriptions'}});
})

subRouter.get('/:id', (req, res) =>{
    res.send({body: {title: 'GETS subscriptions by id'}});
})

subRouter.post('/', (req, res) =>{
    res.send({body: {title: 'Create new subscriptions'}});
})

subRouter.put('/:id', (req, res) =>{
    res.send({body: {title: 'UPDATE subscriptions'}});
})

subRouter.delete('/:id', (req, res) =>{
    res.send({body: {title: 'delete a subscription'}});
})

subRouter.get('/user/:id', (req, res) =>{
    res.send({body: {title: 'GETS all subscriptions of this user'}});
})

subRouter.put('/:id/cancel', (req, res) =>{
    res.send({body: {title: 'cancel subscription'}});

})

subRouter.get('/upcoming-renewals', (req, res) =>{
    res.send({body: {title: 'GETS all upcoming renewals'}});
})

export default subRouter;
