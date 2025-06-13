export const manifests: Array<UmbExtensionManifest> = [
	{
		type: 'globalContext',
		alias: 'Umb.GlobalContext.SortMode',
		name: 'Sort Mode Context',
		api: () => import('./sort-mode.context.js'),
	},
];
