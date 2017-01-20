let Todo = require('../models/todo')
let User = require('../models/user')

let todosController = {
  list: (req, res) => {
    console.log(req.user.id)
    Todo.find({user_id: req.user.id}, (err, todos) => {
      if (err) throw err
      res.render('todo/index', { todos: todos, user: req.user})
    })
  },

  new: (req, res) => {
    res.render('todo/create', {user: req.user})
  },

  listOne: (req, res) => {
    Todo.findById(req.params.id)
       .populate('user_id').exec((err, todoItem) => {
         if (todoItem.user_id.equals(req.user.id)) {
           if (err) throw err
           res.render('todo/single-todo', { todoItem: todoItem, user: req.user})
         } else {
           req.flash('error', 'This is not your todo')
           res.redirect('/todo')
         }
       })
  },

  create: (req, res) => {
    let newTodo = new Todo({
      title: req.body.title,
      description: req.body.description,
      completed: false,
      user_id: req.user.id
    })
    console.log(req.user.id)
    newTodo.save(function (err, savedEntry) {
      if (err) throw err
      res.redirect('/todo')
    })
  },

  edit: (req, res) => {
    Todo.findById(req.params.id)
    .populate('user_id')
    .exec((err, todoItem) => {
      if (todoItem.user_id.equals(req.user.id)) {
        if (err) throw err
        res.render('todo/edit', { todoItem: todoItem, user: req.user})
      } else {
        req.flash('error', 'This is not your todo')
        res.redirect('/todo')
      }
    })
  },

  update: (req, res) => {
    if (req.body.user !== req.user.email) {
      User.findOne({email: req.body.user}, (err, user) => {
        if (user !== null) {
          Todo.findOneAndUpdate({
            _id: req.params.id
          }, {
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed,
            user_id: user.id
          }).populate('user_id').exec((err, todoItem) => {
            if (todoItem.user_id) {
              if (err) throw err
            }
            res.redirect('/todo')
          })
          return
        } else {
          req.flash('error', 'Transfer of ownership not succesful. Please enter a valid user email.')
          res.redirect('/todo/' + req.params.id + '/edit')
        }
      })
    } else {
      Todo.findOneAndUpdate({
        _id: req.params.id
      }, {
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed
      }).populate('user_id').exec((err, todoItem) => {
        if (err) throw err
        res.redirect('/todo/' + todoItem.id)
      })
    }
  },

  delete: (req, res) => {
    Todo.findByIdAndRemove(req.params.id)
    .populate('user_id')
    .exec((err, todoItem) => {
      if (err) throw err
      res.redirect('/todo')
    })
  }

}

module.exports = todosController
