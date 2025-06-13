import { manifests as contextManifests } from './context/manifests.js';
import { manifests as propertyManifests } from './property/manifests.js';
import type { UmbExtensionManifestKind } from '@umbraco-cms/backoffice/extension-registry';

export const manifests: Array<UmbExtensionManifest | UmbExtensionManifestKind> = [
	...contextManifests,
	...propertyManifests,
];
