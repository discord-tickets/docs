# Reverse proxy setup

Securing your bot with [SSL/TLS encryption](https://www.cloudflare.com/en-gb/learning/ssl/what-is-ssl/) is highly recommended.

To do this, you need:

1. A domain name (e.g. `example.com`)
2. To set up a web server as a reverse proxy 

!!! tip
	If your bot is running on a [supported port](https://developers.cloudflare.com/fundamentals/get-started/reference/network-ports/),
	you can use Cloudflare's Proxy and free SSL/TLS instead.

If you already have a domain and know how to create an HTTPS proxy, you can safely skip this page. 
If not, there are several options available:

|                   | Traefik + Let's Encrypt | Nginx + Let's Encrypt |   PebbleHost    |
| :---------------- | :---------------------: | :-------------------: | :-------------: |
| Difficulty        |  Moderate { .orange }   | Moderate { .orange }  | Easy { .green } |
| Bot installations |       Docker only       |          Any          | PebbleHost only |

!!! warning
    Make sure you set the bot's `HTTP_TRUST_PROXY` environment variable to `true` if you're using a reverse proxy.


## Traefik

*soon™️*


## Nginx

### Community guides

<div class="grid cards" markdown>

-   :one: __Nginx installation__

    ---

    How to install Nginx on various Linux distributions.

    [:octicons-arrow-right-24: DigitalOcean Community](https://www.digitalocean.com/community/tutorial_collections/how-to-install-nginx)

-   :two: __Securing Nginx__

    ---

    How to secure Nginx with Let's Encrypt on various Linux distributions.

    [:octicons-arrow-right-24: DigitalOcean Community](https://www.digitalocean.com/community/tutorial_collections/how-to-secure-nginx-with-let-s-encrypt)

</div>

### Configuration

<div class="annotate" markdown>

```nginx
server {
    listen 80;
    listen [::]:80; # remove this line if you don't have IPv6 networking

    server_name tickets.example.com(1);

    location / {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Port $server_port;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        proxy_http_version 1.1;
        proxy_pass http://127.0.0.1:8080(2);
    }
}
```

</div>

1. Replace this with the FQDN that you set in your bot's `HTTP_EXTERNAL` environment variable.
2. Change the port to match your bot's `HTTP_PORT` environment variable.
   Also, change the IP address if the bot is running on a different server.


## PebbleHost

<div class="grid cards" markdown>

-   :fontawesome-solid-life-ring:{ .lg .middle } __PebbleHost Reverse Proxy__

    ---

    How to set up a reverse proxy on PebbleHost.

    [:octicons-arrow-right-24: PebbleHost Knowledgebase](ttps://help.pebblehost.com/en/minecraft/how-to-setup-a-reverse-proxy)


</div>
