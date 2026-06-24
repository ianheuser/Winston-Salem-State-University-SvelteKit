
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
		RouteId(): "/" | "/programs" | "/programs/data-analytics" | "/programs/dnp" | "/programs/dpt" | "/programs/fnp" | "/programs/mat" | "/programs/mba" | "/programs/mcst" | "/programs/mha" | "/programs/msn" | "/programs/msot" | "/programs/msrc";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/programs": Record<string, never>;
			"/programs/data-analytics": Record<string, never>;
			"/programs/dnp": Record<string, never>;
			"/programs/dpt": Record<string, never>;
			"/programs/fnp": Record<string, never>;
			"/programs/mat": Record<string, never>;
			"/programs/mba": Record<string, never>;
			"/programs/mcst": Record<string, never>;
			"/programs/mha": Record<string, never>;
			"/programs/msn": Record<string, never>;
			"/programs/msot": Record<string, never>;
			"/programs/msrc": Record<string, never>
		};
		Pathname(): "/" | "/programs/data-analytics/" | "/programs/dnp/" | "/programs/dpt/" | "/programs/fnp/" | "/programs/mat/" | "/programs/mba/" | "/programs/mcst/" | "/programs/mha/" | "/programs/msn/" | "/programs/msot/" | "/programs/msrc/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/images/centered-logo.png" | "/images/data-analytics-hero.jpg" | "/images/data-analytics-highlights.jpg" | "/images/data-analytics-lead-form.jpg" | "/images/data-analytics-real-world-application.jpg" | "/images/dean-boykin.jpg" | "/images/facebook.png" | "/images/innovators.jpg" | "/images/instagram.png" | "/images/landing-campus-left.jpg" | "/images/landing-campus-right.jpg" | "/images/landing-form-photo.jpg" | "/images/landing-hero.gif" | "/images/linked-in.png" | "/images/linkedin.png" | "/images/logo-main.svg" | "/images/logo-sub.svg" | "/images/logo.png" | "/images/mcst-hero.jpg" | "/images/mcst-lead-form.jpg" | "/images/mcst-real-world.jpg" | "/images/neon-sign.png" | "/images/new-logo.png" | "/images/program-clocktower.jpg" | "/images/program-community.jpg" | "/images/program-form-photo.jpg" | "/images/program-lead.jpg" | "/images/ram-head.png" | "/images/red-blur.png" | "/images/youtube.png" | "/robots.txt" | "/styles.css" | string & {};
	}
}