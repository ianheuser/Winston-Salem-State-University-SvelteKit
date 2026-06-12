export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/MCST_Higlights_Image.jpg","images/MCST_Real_World.jpg","images/MCST_lead_form_image.jpg","images/centered-logo.png","images/dean-boykin.jpg","images/facebook.png","images/instagram.png","images/landing-campus-left.jpg","images/landing-campus-right.jpg","images/landing-form-photo.jpg","images/landing-hero.gif","images/linked-in.png","images/linkedin.png","images/logo-main.svg","images/logo-sub.svg","images/logo.png","images/neon-sign.png","images/new-logo.png","images/program-clocktower.jpg","images/program-community.jpg","images/program-form-photo.jpg","images/program-hero.jpg","images/program-lead.jpg","images/ram-head.png","images/red-blur.png","images/youtube.png","robots.txt","styles.css"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".gif":"image/gif",".svg":"image/svg+xml",".txt":"text/plain",".css":"text/css"},
	_: {
		client: {start:"_app/immutable/entry/start.Cs5FGDbE.js",app:"_app/immutable/entry/app.puERFf5Y.js",imports:["_app/immutable/entry/start.Cs5FGDbE.js","_app/immutable/chunks/BAl708xC.js","_app/immutable/chunks/DdRJHgGp.js","_app/immutable/entry/app.puERFf5Y.js","_app/immutable/chunks/DdRJHgGp.js","_app/immutable/chunks/kNaey6uv.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/programs/mcst",
				pattern: /^\/programs\/mcst\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
