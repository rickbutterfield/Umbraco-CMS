var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { UmbTextStyles } from '@umbraco-cms/backoffice/style';
import { html, customElement, LitElement, property, css } from '@umbraco-cms/backoffice/external/lit';
import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';
// eslint-disable-next-line local-rules/enforce-umb-prefix-on-element-name
let ExampleBlockCustomView = class ExampleBlockCustomView extends UmbElementMixin(LitElement) {
    render() {
        return html `
			<div class="uui-text ${this.settings?.blockAlignment ? 'align-' + this.settings?.blockAlignment : undefined}">
				<h5 class="uui-text">My Custom View</h5>
				<p>Headline: ${this.content?.headline}</p>
				<p>Alignment: ${this.settings?.blockAlignment}</p>
			</div>
		`;
    }
    static { this.styles = [
        UmbTextStyles,
        css `
			:host {
				position: relative;
				display: block;
				z-index: 10000;
				height: 100%;
				box-sizing: border-box;
				background-color: red;
				color: white;
				border-radius: 9px;
				padding: 12px;
			}

			:host > div {
				position: relative;
				display: block;
				z-index: 10000;
			}

			.align-center {
				text-align: center;
			}
			.align-right {
				text-align: right;
			}
		`,
    ]; }
};
__decorate([
    property({ attribute: false })
], ExampleBlockCustomView.prototype, "content", void 0);
__decorate([
    property({ attribute: false })
], ExampleBlockCustomView.prototype, "settings", void 0);
ExampleBlockCustomView = __decorate([
    customElement('example-block-custom-view')
    // eslint-disable-next-line local-rules/umb-class-prefix
], ExampleBlockCustomView);
export { ExampleBlockCustomView };
export default ExampleBlockCustomView;
