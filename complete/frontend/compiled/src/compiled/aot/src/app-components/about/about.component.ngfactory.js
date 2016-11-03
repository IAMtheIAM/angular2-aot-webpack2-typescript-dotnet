/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var import0 = require('../../../../../src/app-components/about/about.component');
var import1 = require('@angular/core/src/linker/view');
var import2 = require('@angular/core/src/linker/debug_context');
var import4 = require('@angular/core/src/linker/element');
var import5 = require('@angular/core/src/linker/view_utils');
var import7 = require('@angular/core/src/linker/view_type');
var import8 = require('@angular/core/src/change_detection/change_detection');
var import9 = require('../../../../../src/app-components/services/appstate.service');
var import10 = require('../../../../../src/app-components/services/authentication.service');
var import11 = require('@angular/router/src/router_state');
var import12 = require('@angular/core/src/metadata/view');
var import13 = require('@angular/core/src/linker/component_factory');
var Wrapper_AboutComponent = (function () {
    function Wrapper_AboutComponent(p0, p1, p2) {
        this.changed = false;
        this.context = new import0.AboutComponent(p0, p1, p2);
    }
    Wrapper_AboutComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_AboutComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_AboutComponent;
}());
exports.Wrapper_AboutComponent = Wrapper_AboutComponent;
var nodeDebugInfos_AboutComponent_Host0 = [new import2.StaticNodeDebugInfo([import0.AboutComponent], import0.AboutComponent, {})];
var renderType_AboutComponent_Host = null;
var _View_AboutComponent_Host0 = (function (_super) {
    __extends(_View_AboutComponent_Host0, _super);
    function _View_AboutComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AboutComponent_Host0, renderType_AboutComponent_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_AboutComponent_Host0);
    }
    _View_AboutComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import5.selectOrCreateRenderHostElement(this.renderer, 'about', import5.EMPTY_INLINE_ARRAY, rootSelector, this.debug(0, 0, 0));
        this._appEl_0 = new import4.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AboutComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AboutComponent_0_4 = new Wrapper_AboutComponent(this.parentInjector.get(import9.AppState), this.parentInjector.get(import10.Authentication), this.parentInjector.get(import11.ActivatedRoute));
        this._appEl_0.initComponent(this._AboutComponent_0_4.context, [], compView_0);
        compView_0.create(this._AboutComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_AboutComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AboutComponent) && (0 === requestNodeIndex))) {
            return this._AboutComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_AboutComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this.debug(0, 0, 0);
        this._AboutComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._AboutComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            this.debug(0, 0, 0);
            if ((this.numberOfChecks === 0)) {
                this._AboutComponent_0_4.context.ngAfterViewInit();
            }
        }
    };
    return _View_AboutComponent_Host0;
}(import1.DebugAppView));
function viewFactory_AboutComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AboutComponent_Host === null)) {
        (renderType_AboutComponent_Host = viewUtils.createRenderComponentType('', 0, import12.ViewEncapsulation.None, [], {}));
    }
    return new _View_AboutComponent_Host0(viewUtils, parentInjector, declarationEl);
}
exports.AboutComponentNgFactory = new import13.ComponentFactory('about', viewFactory_AboutComponent_Host0, import0.AboutComponent);
var styles_AboutComponent = [];
var nodeDebugInfos_AboutComponent0 = [
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {}),
    new import2.StaticNodeDebugInfo([], null, {})
];
var renderType_AboutComponent = null;
var _View_AboutComponent0 = (function (_super) {
    __extends(_View_AboutComponent0, _super);
    function _View_AboutComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AboutComponent0, renderType_AboutComponent, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways, nodeDebugInfos_AboutComponent0);
    }
    _View_AboutComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import5.createRenderElement(this.renderer, parentRenderNode, 'h1', import5.EMPTY_INLINE_ARRAY, this.debug(0, 0, 0));
        this._text_1 = this.renderer.createText(this._el_0, 'Hello about page!', this.debug(1, 0, 4));
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', this.debug(2, 0, 26));
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2
        ], [], []);
        return null;
    };
    return _View_AboutComponent0;
}(import1.DebugAppView));
function viewFactory_AboutComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AboutComponent === null)) {
        (renderType_AboutComponent = viewUtils.createRenderComponentType('C:/Source/GitHub/angular2-webpack2-dotnet-starter/complete/frontend/src/app-components/about/about.template.html', 0, import12.ViewEncapsulation.None, styles_AboutComponent, {}));
    }
    return new _View_AboutComponent0(viewUtils, parentInjector, declarationEl);
}
exports.viewFactory_AboutComponent0 = viewFactory_AboutComponent0;
//# sourceMappingURL=about.component.ngfactory.js.map