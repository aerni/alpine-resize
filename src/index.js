export default function (Alpine) {
    Alpine.directive(
        'resize', (el, { expression }, { evaluateLater, cleanup }) => {
            console.log(expression);
            const evaluate = evaluateLater(expression)

            const observer = new ResizeObserver(entries => {
                entries.forEach(entry => evaluate(() => {}, { params: [entry] }))
            })

            observer.observe(el)

            cleanup(() => {
                observer.disconnect()
            })
        },
    )
}
