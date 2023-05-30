#!/bin/sh
apt-get install libcairo2-dev libfreetype6-dev libffi-dev libjpeg-dev libpng-dev libz-dev pngquant
pip install -r requirements.txt
pip install pillow cairosvg wheel git+https://${GH_TOKEN}@github.com/eartharoid/mkdocs-material-insiders.git
mkdocs build --config-file mkdocs.insiders.yml