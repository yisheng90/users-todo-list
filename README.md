# Users Todo List

This is Part 6 of a series of labs working towards building your first full stack web app.

- [Part 1 - TDD todo list](https://github.com/wdi-sg/tdd-todo-list)
- [Part 2 - Mongo todo list](https://github.com/wdi-sg/mongo-todo-list)
- [Part 3 - Express todo list pt1](https://github.com/wdi-sg/express-todo-list-pt1)
- (optional) [Part 3.1 - Mocha, Chai and Supertest todo list](https://github.com/wdi-sg/mocha-todo-list)
- [Part 4 - Express todo list pt2](https://github.com/wdi-sg/express-todo-list-pt2)
- [Part 5 - Multi Model todo list](https://github.com/wdi-sg/multi-model-todo-list)
- Part 6 - (this one)

So far you've built a full MVC Todo List Application. The only thing that is missing is User Authentication. Use what you'ver learnt in the lab to add user authentication to this App.

## Exercise

### Part 1
You'll need to add user accounts and authentication routes to your application. Specifically, your Application should allow a user to:
- signup and create a new account
- login with their email and password
- logout when they have finished their session
- only CRUD Todos if they are logged in

### Part 2
Now that you have user accounts, you want to associate the users with the Todos they create and use that to restrict access. Specifically, your Application should allow a user to:
- create a new Todo - the todo should store the user_id of it's creator (Mongoose Referencing)
- view only their Todos
- edit only their Todos
- delete only their Todos

Your Application should not allow a user to:
- perform CRUD actions on the Todos of other users

Your new routes will include.

- `GET /auth/signup`
- `POST /auth/signup`
- `GET /auth/login`
- `POST /auth/login`
- `GET /auth/logout`

As you'll have the logged in user stored in the req.body, you do not need to have the user id in the URL. For example `/todos` should show the Todos for the logged in user, whoever that is.

## Bonus:
- Add a navigation bar that shows the name/email of the logged in user and shows buttons to login/logout/signup.
- Allow a user to transfer ownership of a Todo to another user. This would be an option on your edit form.
- List some stats about you application on the public home page, number of users, number of Todos etc.
- Allow a user to delete their account, which should then delete all of their Todos.
