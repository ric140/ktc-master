export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.CcOeHa73.js",app:"_app/immutable/entry/app.S_upAcSc.js",imports:["_app/immutable/entry/start.CcOeHa73.js","_app/immutable/chunks/CTfsA9A3.js","_app/immutable/chunks/B2QSKqcC.js","_app/immutable/entry/app.S_upAcSc.js","_app/immutable/chunks/B2QSKqcC.js","_app/immutable/chunks/6VynnOCg.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
