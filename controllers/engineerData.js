const Engineer = require('../models/engineer')

const dataController = {}

// INDEX - list all engineers
dataController.index = async (req, res, next) => {
  try {
    const engineers = await Engineer.find({})
    res.locals.data.engineers = engineers
    next()
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}

// SHOW - show one engineer by id
dataController.show = async (req, res, next) => {
  try {
    const engineer = await Engineer.findById(req.params.id)
    if (!engineer) {
      throw new Error(`Could not locate engineer with id ${req.params.id}`)
    }
    res.locals.data.engineer = engineer
    next()
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}

// CREATE - create a new engineer
dataController.create = async (req, res, next) => {
  // Checkbox handling: available will be 'on' if checked, undefined if not
  req.body.available = req.body.available === 'on' ? true : false

  try {
    const newEngineer = await Engineer.create(req.body)
    res.locals.data.engineer = newEngineer
    next()
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}

// UPDATE - update an existing engineer
dataController.update = async (req, res, next) => {
  req.body.available = req.body.available === 'on' ? true : false

  try {
    const updatedEngineer = await Engineer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.locals.data.engineer = updatedEngineer
    next()
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}

// DESTROY - delete an engineer by id
dataController.destroy = async (req, res, next) => {
  try {
    await Engineer.findByIdAndDelete(req.params.id)
    next()
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}

module.exports = dataController
