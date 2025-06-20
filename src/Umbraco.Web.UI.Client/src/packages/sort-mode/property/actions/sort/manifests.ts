import type { UmbExtensionManifestKind } from '@umbraco-cms/backoffice/extension-registry';
import { UMB_WRITABLE_PROPERTY_CONDITION_ALIAS } from '@umbraco-cms/backoffice/property';
import { UMB_PROPERTY_ACTION_DEFAULT_KIND_MANIFEST } from '@umbraco-cms/backoffice/property-action';

export const UMB_PROPERTY_ACTION_TOGGLE_SORT_MODE_KIND_MANIFEST: UmbExtensionManifestKind = {
	type: 'kind',
	alias: 'Umb.Kind.PropertyAction.SortMode',
	matchKind: 'toggleSortMode',
	matchType: 'propertyAction',
	manifest: {
		...UMB_PROPERTY_ACTION_DEFAULT_KIND_MANIFEST.manifest,
		type: 'propertyAction',
		kind: 'toggleSortMode',
		api: () => import('./sort-mode.property-action.js'),
		weight: 1000,
		meta: {
			icon: 'icon-navigation-vertical',
			label: 'Sort Mode',
		},
		conditions: [
			{
				alias: UMB_WRITABLE_PROPERTY_CONDITION_ALIAS,
			},
		],
	},
};

export const manifests: Array<UmbExtensionManifest | UmbExtensionManifestKind> = [
	UMB_PROPERTY_ACTION_TOGGLE_SORT_MODE_KIND_MANIFEST,
];
