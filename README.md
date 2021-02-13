# AngularJS Micro Frontend Demo

This demo demonstrates micro-frontend with Webpack Federation.

### Host Project : App-Shell
The Shell project (app-shell folder) load two micro-frontend by @uirouter/angularjs and Webpack federation.
The Shell also have 'code splitting' to users folder in app-shell folder. call local route.
- #####  Remotes links:
    -  appTodo@http://localhost:8080/apollo/[version]/remoteEntry-todo-module.js
    - appUsers@http://localhost:8080/apollo/[version]/remoteEntry-users-module.js

### Micro Frontend Projects :
- #### app-users :
    -  expose:  users module (./users/users.module.ts)
    - remote:   remoteEntry-users-module.js
- #### app-todo:
    - expose:  users module (./todo/todo.module.ts)
    - remote:   remoteEntry-todo-module.js
