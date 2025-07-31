const express = require('express')
const morgan = require('morgan')
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')

// Engineer routes
const engineerRoutes = require('./controllers/engineerRoutes') 

const app = express()

// View engine
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

// Middleware
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(morgan('dev'))

// Initialize res.locals.data (used in views)
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})

// Routes
app.use('/engineers', engineerRoutes)

module.exports = app
