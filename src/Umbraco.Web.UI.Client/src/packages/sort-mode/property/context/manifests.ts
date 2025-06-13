import type { UmbExtensionManifestKind } from '@umbraco-cms/backoffice/extension-registry';

export const manifests: Array<UmbExtensionManifest | UmbExtensionManifestKind> = [
	{
		type: 'kind',
		alias: 'Umb.Kind.PropertyContext.SortMode',
		matchKind: 'sortMode',
		matchType: 'propertyContext',
		manifest: {
			type: 'propertyContext',
			kind: 'sortMode',
			api: () => import('./sort-mode.property-context.js'),
			weight: 1200,
		},
	},
];
