export const name = 'Umbraco.SortMode';
export const extensions = [
	{
		name: 'Sort Mode Bundle',
		alias: 'Umb.Bundle.SortMode',
		type: 'bundle',
		js: () => import('./manifests.js'),
	},
];
