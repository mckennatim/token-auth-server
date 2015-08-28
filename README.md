#token-auth-server

Uses node express passport and mongoose.

##config

Rename cfg-blank.js to cfg.js and fill out database, port, jwt secret and smtp mailer credentials.
    
    cd node-token-auth
    mv cfg-blank.js cfg.js

from /node-token-auth  directory  run

    npm install 

start mongod if not running

       monngod

from /token-auth-server run
    
    node server

test - from new console:

      cd node-token-auth
      mocha
