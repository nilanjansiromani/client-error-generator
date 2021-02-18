
// intentionally throw a reference error
export const generateReferenceError = () => {
    window.addEventListener('error', (event) => {
        console.log(event)
    });

    // Let try a reference error
    try {
        throw new Error('Exception message');
    } catch (e) {
        console.log("%c New execption thrown", "background-color: red; color:white")
    }
}

const fetcher = (code) => {
    fetch(`https://httpstat.us/${code}`)
        .then(response => response.json())
        .then(json => console.log(json))
}
// Make fetch call and fail
export const httpErrorGenerator = {
    http400: () => fetcher(400),
    http403: () => fetcher(403),
    http404: () => fetcher(404),
    http500: () => fetcher(500)
}