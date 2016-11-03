/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var import0 = require('../../../../../src/app-components/404/notfound404.component');
var import1 = require('@angular/core/src/linker/view');
var import2 = require('@angular/core/src/linker/debug_context');
var import4 = require('@angular/core/src/linker/element');
var import5 = require('@angular/core/src/linker/view_utils');
var import7 = require('@angular/core/src/linker/view_type');
var import8 = require('@angular/core/src/change_detection/change_detection');
var import9 = require('../../../../../src/app-components/services/appstate.service');
var import10 = require('../../../../../src/app-components/services/authentication.service');
var import11 = require('@angular/core/src/metadata/view');
var import12 = require('@angular/core/src/linker/component_factory');
var Wrapper_NotFound404Component = (function () {
    function Wrapper_NotFound404Component(p0, p1) {
        this.changed = false;
        this.context = new import0.NotFound404Component(p0, p1);
    }
    Wrapper_NotFound404Component.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_NotFound404Component.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_NotFound404Component;
}());
exports.Wrapper_NotFound404Component = Wrapper_NotFound404Component;
var nodeDebugInfos_NotFound404Component_Host0 = [new import2.StaticNodeDebugInfo([import0.NotFound404Component], import0.NotFound404Component, {})];
var renderType_NotFound404Component_Host = null;
var _View_NotFound404Component_Host0 = (function (_super) {
    __extends(_View_NotFound404Component_Host0, _super);
    function _View_NotFound404Component_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NotFound404Component_Host0, renderType_NotFound404Component_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_NotFound404Component_Host0);
    }
    _View_NotFound404Component_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import5.selectOrCreateRenderHostElement(this.renderer, 'NotFound404', import5.EMPTY_INLINE_ARRAY, rootSelector, this.debug(0, 0, 0));
        this._appEl_0 = new import4.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_NotFound404Component0(this.viewUtils, this.injector(0), this._appEl_0);
        this._NotFound404Component_0_4 = new Wrapper_NotFound404Component(this.parentInjector.get(import9.AppState), this.parentInjector.get(import10.Authentication));
        this._appEl_0.initComponent(this._NotFound404Component_0_4.context, [], compView_0);
        compView_0.create(this._NotFound404Component_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_NotFound404Component_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.NotFound404Component) && (0 === requestNodeIndex))) {
            return this._NotFound404Component_0_4.context;
        }
        return notFoundResult;
    };
    _View_NotFound404Component_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this.debug(0, 0, 0);
        this._NotFound404Component_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._NotFound404Component_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            this.debug(0, 0, 0);
            if ((this.numberOfChecks === 0)) {
                this._NotFound404Component_0_4.context.ngAfterViewInit();
            }
        }
    };
    return _View_NotFound404Component_Host0;
}(import1.DebugAppView));
function viewFactory_NotFound404Component_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_NotFound404Component_Host === null)) {
        (renderType_NotFound404Component_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_NotFound404Component_Host0(viewUtils, parentInjector, declarationEl);
}
exports.NotFound404ComponentNgFactory = new import12.ComponentFactory('NotFound404', viewFactory_NotFound404Component_Host0, import0.NotFound404Component);
var styles_NotFound404Component = [];
var nodeDebugInfos_NotFound404Component0 = [
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {})
];
var renderType_NotFound404Component = null;
var _View_NotFound404Component0 = (function (_super) {
    __extends(_View_NotFound404Component0, _super);
    function _View_NotFound404Component0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NotFound404Component0, renderType_NotFound404Component, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_NotFound404Component0);
    }
    _View_NotFound404Component0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import5.createRenderElement(this.renderer, parentRenderNode, 'div', new import5.InlineArray2(2, 'class', 'card-panel'), this.debug(0, 0, 0));
        this._text_1 = this.renderer.createText(this._el_0, '\n   ', this.debug(1, 0, 24));
        this._el_2 = import5.createRenderElement(this.renderer, this._el_0, 'h1', import5.EMPTY_INLINE_ARRAY, this.debug(2, 1, 3));
        this._text_3 = this.renderer.createText(this._el_2, '404 Page Not Found!', this.debug(3, 1, 7));
        this._text_4 = this.renderer.createText(this._el_0, '\n   ', this.debug(4, 1, 31));
        this._el_5 = import5.createRenderElement(this.renderer, this._el_0, 'p', import5.EMPTY_INLINE_ARRAY, this.debug(5, 2, 3));
        this._text_6 = this.renderer.createText(this._el_5, 'Check the website address and try again', this.debug(6, 2, 6));
        this._text_7 = this.renderer.createText(this._el_0, '\n', this.debug(7, 2, 49));
        this._text_8 = this.renderer.createText(parentRenderNode, '\n', this.debug(8, 3, 6));
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._text_8
        ], [], []);
        return null;
    };
    return _View_NotFound404Component0;
}(import1.DebugAppView));
function viewFactory_NotFound404Component0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_NotFound404Component === null)) {
        (renderType_NotFound404Component = viewUtils.createRenderComponentType('C:/Source/GitHub/angular2-webpack2-dotnet-starter/complete/frontend/src/app-components/404/NotFound404.template.html', 0, import11.ViewEncapsulation.None, styles_NotFound404Component, {}));
    }
    return new _View_NotFound404Component0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_NotFound404Component0 = viewFactory_NotFound404Component0;
//# sourceMappingURL=notfound404.component.ngfactory.js.map