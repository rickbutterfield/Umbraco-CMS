import { UMB_SORT_MODE_PROPERTY_CONTEXT } from './sort-mode.property-context-token.js';
import type { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';
import { UmbContextBase } from '@umbraco-cms/backoffice/class-api';
import { UmbBooleanState } from '@umbraco-cms/backoffice/observable-api';

/**
 * Sort mode context for managing entries for property values
 * @export
 * @class UmbSortModePropertyContext
 * @augments {UmbContextBase}
 */
export class UmbSortModePropertyContext extends UmbContextBase {
	#sortMode = new UmbBooleanState(false);
	readonly sortMode = this.#sortMode.asObservable();

	#hasCustomViews = new UmbBooleanState(false);
	readonly hasCustomViews = this.#hasCustomViews.asObservable();

	setSortMode(sortMode: boolean | undefined) {
		this.#sortMode.setValue(sortMode ?? false);
	}
	getSortMode(): boolean | undefined {
		return this.#sortMode.getValue();
	}

	setHasCustomViews(hasCustomViews: boolean | undefined) {
		this.#hasCustomViews.setValue(hasCustomViews ?? false);
	}
	getHasCustomViews(): boolean | undefined {
		return this.#hasCustomViews.getValue();
	}

	constructor(host: UmbControllerHost) {
		super(host, UMB_SORT_MODE_PROPERTY_CONTEXT);
	}
}

export { UmbSortModePropertyContext as api };
