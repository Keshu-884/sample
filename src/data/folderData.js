const explorer = {
    name: "root",
    isFolder: true,
    items: [
        {
            name: "public",
            isFolder: true,
            items: [
                {
                    name: "Chanti",
                    isFolder: true,
                    items: [
                        {
                            name: "nnnn",
                            isFolder: false
                        },
                        {
                            name: "hello.html",
                            isFolder: false
                        }
                    ]
                },
                {
                    name: "public_nested.file",
                    isFolder: false
                },
                {
                    name: "App.js",
                    isFolder: false
                },
                {
                    name: "index.js",
                    isFolder: false
                },
                {
                    name: "styles.css",
                    isFolder: false
                }
            ]
        },
        {
            name: "src",
            isFolder: true,
            items: [
                {
                    name: "App.js",
                    isFolder: false
                },
                {
                    name: "index.js",
                    isFolder: false
                },
                {
                    name: "styles.css",
                    isFolder: false
                }
            ]
        },

        {
            name: "package.json",
            isFolder: false
        }
    ]
}

export default explorer;