const express = require('express');
const vacationController = require('./../controllers/vacationController');

const router = express.Router();

router.param('id', vacationController.checkID);

router
    .route('/')
    .get(vacationController.getAllVacations)
    .post(vacationController.createVacation);

router
    .route('/:id')
    .get(vacationController.getVacation)
    .patch(vacationController.updateVacation)
    .delete(vacationController.deleteVacation);

module.exports = router;