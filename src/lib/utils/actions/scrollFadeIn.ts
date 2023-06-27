import { browser } from '$app/environment';
import { inView, animate } from 'motion';

interface FadeInParams {
	y?: number;
	out_animation?: boolean;
	margin_bottom?: number;
}

export function scrollFadeIn(node: HTMLElement, params: FadeInParams = {}) {
	if (!browser) return;

	const initial_opacity = '0';
	const initial_scale = '0.9';
	const initial_translate = `${params.y || 50}`;

	node.style.opacity = initial_opacity;
	node.style.scale = initial_scale;
	node.style.transform = initial_translate;
	inView(
		node,
		(el) => {
			animate(
				el.target,
				{
					opacity: 1,
					transform: ['translateY(0px) scale(1)']
				},
				{
					duration: 0.5
				}
			);

			if (!params.out_animation) {
				return;
			}
			return (leave) => {
				if (leave) {
					animate(el.target, {
						opacity: initial_opacity,
						transform: [`translateY(${initial_translate}px) scale(${initial_scale})`]
					});
				}
			};
		},
		{
			margin: `0px 0px ${params.margin_bottom || '-100px'} 0px`
		}
	);
}
