const blogsRouter = require("./blogsRouter");

const appRoutes = (app, fs) => {

    app.get('/', (req,res)=>{
        res.send('Welcome to Blogs');
    });

    blogsRouter(app,fs);
}

module.exports = appRoutes;