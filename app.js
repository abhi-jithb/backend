// import express from 'express';

// const app = express();

// app.get('/', (req, res) =>{
//     res.send({ body: 'Welcome to TinkerSpace..'});
// });

// app.listen(3000, () => {
//     console.log("Server running at TinkerSpace on port 3000!!")
// })

// export default app;






























import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send({body: "aree yaar welcome to TS!"});
});

app.listen(4000, () => {
    console.log("Server is running at tinker space!")
})

export default app;