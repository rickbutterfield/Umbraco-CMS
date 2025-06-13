import { UMB_SORT_MODE_PROPERTY_CONTEXT } from './sort-mode.property-context-token.js';
import type { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';
import { UmbContextBase } from '@umbraco-cms/backoffice/class-api';

/**
 * Sort mode context for managing entries for property values
 * @export
 * @class UmbSortModePropertyContext
 * @augments {UmbContextBase}
 */
export class UmbSortModePropertyContext extends UmbContextBase {
	constructor(host: UmbControllerHost) {
		super(host, UMB_SORT_MODE_PROPERTY_CONTEXT);
	}
}

export { UmbSortModePropertyContext as api };
