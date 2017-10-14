A simple todo web application

### start mongodb

Run `mongod --dbpath data` from the root directory.

the tutorial did this instead:

`echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod`

and

`chmod a+x mongod`

...which creates a mongod file in the todos_api folder. This is not necessary if you use the first command.

### start node server

Run `node index.js` from within the todos_api/ directory.

Alternatively, you can run `nodemon index.js` if you have nodemon installed (which automatically restarts the server, yay).
