import type { ManifestPropertyAction, MetaPropertyAction } from '@umbraco-cms/backoffice/property-action';

export interface ManifestPropertyActionSortModeKind
	extends ManifestPropertyAction<MetaPropertyActionSortModeKind> {
	type: 'propertyAction';
	kind: 'toggleSortMode';
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface MetaPropertyActionSortModeKind extends MetaPropertyAction {}

declare global {
	interface UmbExtensionManifestMap {
		umbManifestPropertyActionSortModeKind: ManifestPropertyActionSortModeKind;
	}
}
