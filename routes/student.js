const express = require("express");
const router = express.Router();
const studentContoller = require("../controllers/student");
const passport = require("passport");


const auth = passport.authenticate("jwt-authentication", { session: false });



router.get("/", studentContoller.getAllStudents);

router.get("/:id", studentContoller.getStudentByID );

router.post("/", studentContoller.createNewStudent);

router.put("/:id", studentContoller.editStudentById);

router.delete("/:id", auth, studentContoller.deleteStudentById);





module.exports = router;