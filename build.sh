#!/bin/sh
apt-get install libcairo2-dev libfreetype6-dev libffi-dev libjpeg-dev libpng-dev libz-dev
pip install -r requirements.txt
pip install pillow cairosvg git+https://${GH_TOKEN}@github.com/eartharoid/mkdocs-material-insiders.git
mkdocs build --config-file mkdocs.insiders.yml