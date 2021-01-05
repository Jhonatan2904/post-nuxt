console.log("Listo para registrar un sw.")

if (process.env) {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/OneSignalWorker.js', {
            scope: '/'
        })
    }
}