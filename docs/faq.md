# frequently asked questions / errors

 - my bot isn't starting
   - Privileged intent provided is not enabled or whitelisted
   - Missing Access
   - Please install the package(s) for your selected database type: "mysql2"




## Privileged intent provided is not enabled or whiltelisted

Check the Discord developer portal [Link](https://discord.com/developers/applications) that the following toggle is set to ON:
  ![(Image)](https://static.eartharoid.me/sharex/21/09/tsCX8IVoaa.png)
  
## Missing Access
Re-Invite the Bot using the Invite URL Generator [here](https://discordtickets.app/invite-url-generator/)

## Please install the package(s) for your selected database type: "mysql2"

### Standard Hosting
- navigate to the Bot folder
- type `npm i mysql2`
- start the Bot

### Pterodactyl Hosting
Change the start command to the following:
```
if [[ ! -z ${VERSION} ]]; then    echo -e "Using version ${VERSION}";else    echo -e "Please set the VERSION variable (e.g. v3.0.0)";    exit 0;fi;if [[ -d .git ]]; then    git fetch --all --tags;    git checkout tags/${VERSION};fi;if [[ ! -z ${PLUGINS} ]]; then    /usr/local/bin/npm install ${PLUGINS};fi;if [ -f /home/container/package.json ]; then /usr/local/bin/npm install --production;npm i mysql2 --save;fi;/usr/local/bin/npm start
```

### The `/panel` command is greyed out
please check the following:
1. you have to have at least one category. you can check this by using this command `/settings categories list`
2. you have to be in the "Staff Roles" of the category you want to create a panel for.
