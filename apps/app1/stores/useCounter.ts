const useCounterStore = defineStore('counter', () => {
    const {
        data: counter,
        pending,
        execute
    } = useFetch('/api/play/counter');

    return {
        counter,
        pending,
        execute
    }
})

export {
    useCounterStore
}
