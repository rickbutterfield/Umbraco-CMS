import type { MetaPropertyActionSortModeKind } from './types.js';
import type { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';
import { UMB_PROPERTY_CONTEXT } from '@umbraco-cms/backoffice/property';
import { UmbPropertyActionBase, type UmbPropertyActionArgs } from '@umbraco-cms/backoffice/property-action';
import { UMB_SORT_MODE_CONTEXT } from '@umbraco-cms/backoffice/sort-mode';

export class UmbSortModePropertyAction extends UmbPropertyActionBase<MetaPropertyActionSortModeKind> {
	#init: Promise<unknown>;
	#propertyContext?: typeof UMB_PROPERTY_CONTEXT.TYPE;
	#sortModeContext?: typeof UMB_SORT_MODE_CONTEXT.TYPE;

	constructor(host: UmbControllerHost, args: UmbPropertyActionArgs<MetaPropertyActionSortModeKind>) {
		super(host, args);

		this.#init = Promise.all([
			this.consumeContext(UMB_PROPERTY_CONTEXT, (context) => {
				this.#propertyContext = context;
			}).asPromise({ preventTimeout: true }),

			this.consumeContext(UMB_SORT_MODE_CONTEXT, (context) => {
				this.#sortModeContext = context;
			}).asPromise({ preventTimeout: true }),
		]);
	}

	override async execute() {
		await this.#init;
		if (!this.#propertyContext) throw new Error('Property context not found');
		if (!this.#sortModeContext) throw new Error('Sort mode context not found');

		const isSortModeActive = await this.#sortModeContext.getSortMode();

		//TODO: Setting this here affects all block grid and lists, rather than contextually
		await this.#sortModeContext.setSortMode(!isSortModeActive);
	}
}

export { UmbSortModePropertyAction as api };
