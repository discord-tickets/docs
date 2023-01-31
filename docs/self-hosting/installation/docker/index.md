---
description: How to install Discord Tickets with Docker
---

# Docker  
**Docker & Docker-compose must be installed!**  
Clone the repo  
``docker build -t discord-ticket-v4 .``  
Check if there's any error  
If not, edit docker-compose.yml and change env variables (see env.md)  
  
**For "DB_CONNECTION_URL", Replace password by your $MYSQL_ROOT_PASSWORD, hostname by the set hostname in your docker-compose for the MySQL servcice, and discord-ticket by your $MYSQL_DATABASE**  

``docker-compose up -d``
