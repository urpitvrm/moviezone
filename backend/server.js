const app = require("./app");
const connectdb = require("./database/db");


//connect database
connectdb();

// app.get("/", (req, res) => {
//     app.use(express.static(path.resolve(__dirname, "frontend", "build")));
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
// })

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
    console.log(`server is listening at port no ${PORT}...`);
});
