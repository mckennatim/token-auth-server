#token-auth-server

Uses node express passport and mongoose.

##config

Rename cfg-blank.js to cfg.js and fill out database, port, jwt secret and smtp mailer credentials.

from /server/node-token-auth  directory  run

    npm install 

start mongod if not running

       monngod

from /server run
    
    node server

test - from new console:

      cd node-token-auth
      mocha
