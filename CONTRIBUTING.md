## Contributing Guide

For simple changes, you can easily create a fork, edit the files you want to change, open a PR, and see the result with the PR deploy preview from the Netlify bot.

> [!CAUTION]
> The documentation only supports *British* English for written language. [Spell checks](https://github.com/discord-tickets/docs/actions/workflows/spelling-check.yml) will fail if you use other languages or other forms of English. Code, code snippets, config files, etc can be in American English.

> [!TIP]
> If you are editing tables, please clone the repository locally and edit it with an appropriate IDE (like VS Code) using a markdown formatting extension.

### Local preview

If you want to preview locally, clone the repo and then run `pip install -r requirements.txt` and `mkdocs serve`.

If you choose to run a local preview, the site will not look the same as the production version, this is because it is built with a specific version of the Insiders edition of the theme, which has additional features and a different config. 

This is normal as the v4 documentation uses a newer version of MkDocs that is configured differently.
