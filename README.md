# Obsidian Code Copy
Plugin for [Obsidian](https://obsidian.md). Adds a button to code blocks to copy the code within. Trims whitespaces.

Heavily based on [jdbrice/obsidian-code-block-copy](https://github.com/jdbrice/obsidian-code-block-copy). A few enhancements has been made though:

* Redundant resources have been removed.
* Code has been cleaned up.
* UX has been updated.
* Last trailing character is removed (always a newline in code blocks, prevents accidental code execution on paste).

## Development
Copy the repo, run `npm i`, tweak the source, `npm run build` to compile. Pull requests are welcome.
