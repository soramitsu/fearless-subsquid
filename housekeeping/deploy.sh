#!/bin/bash
set -e

# can be uncommented if needed
#project=$(cat squid.yaml | grep name | grep -oE ': .*' | tr -d ': ') 

# autorize
sqd auth -k $SUBSQUID_KEY

#increase disk size
if [ "$dbincrease" = true ]; then
echo "scale:
  addons:
    postgres:
      storage: 100G
      profile: medium" >> squid.yaml
fi

# database migration
if [ "$dbmigrate" = true ]; then
    npm ci
    make up
    npx squid-typeorm-migration generate
    npx squid-typeorm-migration create
    npx squid-typeorm-migration apply
    npm run build
    printf "✅ database was migrated! \n"
fi

# remove squid
if [ "$fullClean" = true ]; then
    sqd kill $project -f
    printf "♻️ $project was deleted! \n"
fi

# deploy squid
if [ "$deploy" = true ] || [ "$fullClean" = true ]; then
    sqd init $project --template .
    sqd deploy $project --update --no-stream-logs
    printf "✅👌 $project was deployed! \n"
fi

# restart squid
if [ "$restart" = true ]; then
    sqd redeploy $project@v1
    printf "✅ $project was restarted! \n"
fi

# hardreset squid
if [ "$hardreset" = true ]; then
    sqd init $project --template .
    sqd deploy $project -u -r --no-stream-logs
    printf "✅ hardreset of $project is done! \n"
fi
