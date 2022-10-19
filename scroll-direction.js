export default function (Alpine) {
    Alpine.directive('scroll', (element, {expression, modifiers}, {cleanup}) => {
        let classes = expression;
        let threshold = element.getAttribute('x-scroll-threshold') || 0;
        let direction = modifiers.length ? modifiers[0] : false;
        let topNew = window.pageYOffset;
        let topOld = 0;

        if (!direction) {
            return false;
        }

        let scrollHandler = () => {
            topNew = window.pageYOffset;

            if (topOld < topNew && direction === 'down' && topNew > threshold) {
                element.classList.add(classes);
            } else if (topOld > topNew && direction === 'up' && topNew > threshold) {
                element.classList.add(classes);
            } else {
                element.classList.remove(classes);
            }

            topOld = topNew;
        }

        window.addEventListener('scroll', scrollHandler);

        cleanup(() => {
            window.removeEventListener('scroll', scrollHandler)
        })
    })
}
