const blogsRouter = (app,fs) => {
    const dataPath = './public/db.json';


    app.get('/blogs',(req,res)=>{
        fs.readFile(dataPath, 'utf8', (err,data)=>{
            if(err){
                throw err;
            }
            res.send(JSON.parse(data));
        })
    })
}

module.exports = blogsRouter;