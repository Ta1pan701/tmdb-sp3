export const routes = [
    {
        path: /^\/popular-people$/,
        view: async (app) => {
            const response = await fetch('src/pages/popular-people/index.html')

            app.innerHTML = await response.text()
        },
        loadStyles: async () => {
            await import("../pages/popular-people/style.css")
        },
        loadScripts: async () => {
            await import("../pages/popular-people/script.js")
        }
    }
]