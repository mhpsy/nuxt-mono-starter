export default defineEventHandler(async (event) => {
    const {id} = getQuery(event);
    return Array.from({length: 10}).map((_, index) => {
        return {
            key: `${id}${index}`,
            name: process.env.play,
        }
    })
})
