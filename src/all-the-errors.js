
// intentionally throw a reference error
export const generateReferenceError = () => {
    //eslint-disable-next-line
    throw new Error("asfasd");
}

const fetcher = (code) => {
    fetch(`https://httpstat.us/${code}`, {
        method: 'POST',
        body: JSON.stringify({ "foo": "bar" })
    })
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

// intentionally add some console warnings and errors
export const cosnsoleErrors = () => {
    console.error("This is a sample error");
}