export const signal = (controller: any) => {
    if ( controller.value ) controller.value.abort()
    controller.value = new AbortController();
    const { signal } = controller.value
    return signal
}
