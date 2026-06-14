
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/programs" | "/programs/mcst";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/programs": Record<string, never>;
			"/programs/mcst": Record<string, never>
		};
		Pathname(): "/" | "/programs/mcst/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/images/MCST_Higlights_Image.jpg" | "/images/MCST_Real_World.jpg" | "/images/MCST_lead_form_image.jpg" | "/images/centered-logo.png" | "/images/dean-boykin.jpg" | "/images/facebook.png" | "/images/instagram.png" | "/images/landing-campus-left.jpg" | "/images/landing-campus-right.jpg" | "/images/landing-form-photo.jpg" | "/images/landing-hero.gif" | "/images/linked-in.png" | "/images/linkedin.png" | "/images/logo-main.svg" | "/images/logo-sub.svg" | "/images/logo.png" | "/images/neon-sign.png" | "/images/new-logo.png" | "/images/program-clocktower.jpg" | "/images/program-community.jpg" | "/images/program-form-photo.jpg" | "/images/program-hero.jpg" | "/images/program-lead.jpg" | "/images/ram-head.png" | "/images/red-blur.png" | "/images/youtube.png" | "/robots.txt" | "/styles.css" | string & {};
	}
}