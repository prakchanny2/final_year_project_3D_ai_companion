const a1 = require('express');
const app = a1();

//view assignment
app.get('/viewassignment', (req, res) => {
  res.send('View Assignment');
});

//submit assignment
app.post('/submitassignment', (req, res) => {
    res.send('Submit Assignment');
});

//edit profile 
app.put('/editprofile', (req, res) => {
  res.send('Edit Profile');
});

//Express server listening on port 4000
app.listen(4000, () => {
  console.log('Student server is running on port 4000');
});