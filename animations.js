import { animate } from 'https://esm.run/framer-motion';

export function animateCounter(element, target, suffix = '') {
    const node = element;
    if (!node) return;

    const from = 0;

    const controls = animate(from, target, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
            node.textContent = Math.round(value).toLocaleString('en-IN') + suffix;
        }
    });

    return controls.stop;
}
