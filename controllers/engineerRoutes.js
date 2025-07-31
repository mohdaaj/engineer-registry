const express = require('express');
const router = express.Router();
const viewController = require('./engineerViews.js')
const dataController=require('./engineerData.js')
const apiController=require('./engineerAPI.js')

// add routes
// Index
router.get('/', dataController.index, viewController.index);
// New
router.get('/new',viewController.newView );
// Delete
router.delete('/:id', dataController.destroy, viewController.redirectHome);
// Update
router.put('/:id', dataController.update, viewController.redirectShow);
// Create
router.post('/', dataController.create, viewController.redirectHome);
// Edit
router.get('/:id/edit', dataController.show, viewController.edit);
// Show
router.get('/:id', dataController.show, viewController.show);
// Index
router.get('/api', dataController.index, apiController.index);
// Delete
router.delete('/api/:id', dataController.destroy, apiController.destroy);
// Update
router.put('/api/:id', dataController.update, apiController.show);
// Create
router.post('/api', dataController.create, apiController.show);
// Show
router.get('/api/:id', dataController.show, apiController.show);


module.exports = router
