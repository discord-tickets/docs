# Updating

1. Fetch tags with `#!bash git fetch --all --tags`
2. Find the most recent version with `#!bash git describe --tags --abbrev=0`
3. `#!bash git checkout tags/VERSION`, replacing `VERSION` with the version from step 2 (e.g. `v3.0.0`)