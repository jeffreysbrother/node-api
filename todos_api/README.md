run mongodb: `mongod --dbpath data` from the root directory.

tutorial did this instead:

`echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod`

and

`chmod a+x mongod`

The first creates a mongod file in the todos_api folder.

start server: `node index.js` from todos_api/ directory.

...or `nodemon index.js` if you have nodemon installed (which automatically restarts the server, yay)
