const express = require('express');
const app = express();

app.use(express.json());
//API url path = 'http://localhost:5000/user/addmessage'
app.use('/user', require('./routes/user'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));