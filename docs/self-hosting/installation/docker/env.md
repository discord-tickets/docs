# Environment variables
## MySQL  
|     ENVIRONMENT     |              VALUE                  |
|---------------------|-------------------------------------|
| MYSQL_DATABASE      | Name the used database in MySQL     |
| MYSQL_ROOT_PASSWORD | Set a password to root MySQL account|

##Discord-ticket  
| **ENVIRONMENT**   | **VALUE**                                          |
|-------------------|----------------------------------------------------|
| DISCORD_TOKEN     | The token of your discord bot                      |
| DB_PROVIDER       | mysql or sqlite                                    |
| DB_CONNECTION_URL | mysql://root:password@hostname:3306/discord-ticket |
| ENCRYPTION_KEY    | Generate and paste Encryption Key for MySQL        |
| HTTP_EXTERNAL     | http://host:port                                   |
| HTTP_BIND         | port                                               |
| SETTINGS_BIND     | port for settings http panel                       |
| HTTP_HOST         | 0.0.0.0                                            |
| SETTINGS_HOST    | 0.0.0.0                                             |

  
When running in a docker container, HOST is 0.0.0.0 instead of 127.0.0.1, then the docker host can communicate and access the container network using the port and redirect everything to it
