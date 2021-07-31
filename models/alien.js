const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cardinformation', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log(`connection succesfull`);
}).catch((e) => {
    console.log(`no connection`);
})