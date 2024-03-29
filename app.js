const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');



//IMPOURT ROUTES
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');


//CONNECT DATABASE
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})
.then(()=>console.log('DB connected'))
.catch((err)=> console.log(err))

//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


// ROUTES MIDDLEWARE
app.use('/api', authRoutes)
app.use("/api", productRoutes)
app.use("/api", categoryRoutes)




//ERROR MIDDLEWARE
app.use(errorHandler);


const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log('app is ruming on port ${port}');
})