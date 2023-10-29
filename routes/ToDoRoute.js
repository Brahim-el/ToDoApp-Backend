const {Router} = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controller/ToDoController");

const router = Router()

router.get('/',getToDo)

router.post('/insert',saveToDo)

router.post('/update',updateToDo)

router.post('/delete',deleteToDo)

module.exports = router;