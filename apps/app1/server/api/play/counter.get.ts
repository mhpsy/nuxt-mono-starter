export default defineEventHandler(async (event) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return {
        count: Array.from({length: 10}).map((_, index) => {
            return `${Math.floor(Math.random() * 100)}-${index}`
        })
    }
})
