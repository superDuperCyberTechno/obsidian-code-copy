import { App, Plugin, PluginManifest, MarkdownView  } from "obsidian";

const excludeLangs = [
    "todoist"
];

export default class CMSyntaxHighlightPlugin extends Plugin {
    constructor(app: App, pluginManifest: PluginManifest) {
        super(app, pluginManifest);
    }

    async onload() {
        this.registerInterval(
            window.setInterval(this.injectButtons.bind(this), 1000)
        );
    }

    injectButtons() {
        this.addCopyButtons(navigator.clipboard);
    }

    addCopyButtons(clipboard:any) {
        document.querySelectorAll('pre > code').forEach(function (codeBlock) {
            var pre = codeBlock.parentNode;

            // check for excluded langs
            for ( let lang of excludeLangs ){
                if (pre.classList.contains( `language-${lang}` ))
                return;
            }

            // Dont add more than once
            if (pre.parentNode.classList.contains('has-code-copy-button')) {
                return;
            }

            pre.parentNode.classList.add('has-code-copy-button');

            var button = document.createElement('button');
            button.className = 'code-copy-button';
            button.type = 'button';
            button.innerText = 'Copy';

            button.addEventListener('click', function () {
                clipboard.writeText(codeBlock.innerText.trim()).then(function () {
                    //Chrome doesn't seem to blur automatically, leaving the button in a focused state.
                    button.blur();

                    button.innerText = 'Copied';
                    setTimeout(function () {
                        button.innerText = 'Copy';
                    }, 2000);

                }, function (error) {
                    button.innerText = 'Error';
                });
            });

            pre.appendChild(button);
        });
    }
}
