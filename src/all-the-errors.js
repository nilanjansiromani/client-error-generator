export const aRefError = () => {
    // Let try a reference error
    try {
        throw new Error('Exception message');
    } catch (e) {
        console.log(e)
    }
}