const t1 = require('express');
const app = t1();


//add assignment
app.post('/addassignment', (req, res) => {
  res.send('Add Assignment');
});

//search student 
app.get('/searchstudent', (req, res) => {
  res.send('Search Student');
});

//remove student 
app.delete('/removestudent', (req, res) => {
  res.send('Remove Student');
});

//Express server listening on port 3000
app.listen(3000, () => {
  console.log('Teacher server is running on port 3000');
});