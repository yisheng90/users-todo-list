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

Your Application should allow a user to:
- signup and create a new account
- login with their email and password
- logout when they have finished their session
- peform CRUD actions on their Todos (i.e. filter the Todos shown and editable to only be those that belong to the user)

Your Application should not allow a user to:
- perform CRUD actions on the Todos of other users

You'll need to decide whether to use Mongoose Embedding or Referecing for the Relationships. Spend 10 minutes discussing this with your Neighrbours to review the benefits of each and pick the right method for the job.

Your new routes will include. 

- `GET /auth/signup`
- `POST /auth/signup`
- `GET /auth/login`
- `POST /auth/login`
- `GET /auth/logout`

## Bonus:

- Allow a user to transfer ownsership of a Todo to another user
- List some stats about you application on the public home page, number of users, todos created etc
- Allow a user to delete their account, which should then delete all of their Todos
