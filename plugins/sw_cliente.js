if (process.client) {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js', {
            scope: '/'
        }).then(response => console.log(response)).catch(error => console.log(error))
    }
}
