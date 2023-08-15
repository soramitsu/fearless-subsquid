#!/bin/bash

sqd auth -k $SUBSQUID_KEY

# database migration
if [ "$dbmigrate" = true ]; then
    npm ci
    make up
    npx squid-typeorm-migration generate
    npx squid-typeorm-migration create
    npx squid-typeorm-migration apply
    npm run build
fi

# remove squid
if [ "$fullClean" = true ]; then
    sqd kill $project -f
fi

# deploy squid
if [ "$deploy" = true ] || [ "$fullClean" = true ]; then
    sqd init $project --template .
    sqd deploy $project --update --no-stream-logs
fi

# restart squid
if [ "$restart" = true ];
    sqd redeploy $project@v1
fi

# hardreset squid
if [ "$hardreset" = true ]; then
    sqd init $project --template .
    sqd deploy $project -u -r --no-stream-logs
fi

