var router = require('express').Router();
var studentsCtrl = require('../controllers/students');

// GET /students
router.get('/students', studentsCtrl.index);

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
router.post('/facts', isLoggedIn, studentsCtrl.addFact);

// DELETE /facts/:id
router.delete('/facts/:id', isLoggedIn, studentsCtrl.delFact);


// define our authorization function
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next()
    } else {
        res.redirect('/auth/google')
    }
}



module.exports = router;
