/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../../../src/app-components/app/app.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/linker/debug_context';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/linker/element';
import * as import7 from '@angular/core/src/di/injector';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '../../../../../src/app-components/services/appstate.service';
import * as import10 from '../../../../../src/app-components/services/authentication.service';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/common/src/directives/ng_if';
import * as import15 from '@angular/router/src/directives/router_outlet';
import * as import16 from '../../../../../src/app-components/nav/footer/nav-footer.component';
import * as import17 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import18 from '../../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import19 from '../nav/footer/nav-footer.component.ngfactory';
import * as import20 from '@angular/common/src/pipes/json_pipe';
import * as import21 from '@angular/router/src/router_outlet_map';
import * as import22 from '@angular/core/src/linker/component_factory_resolver';
import * as import23 from '../../../../../src/app-components/nav/header/nav-header.component';
import * as import24 from '../nav/header/nav-header.component.ngfactory';
import * as import25 from '../../../../../src/app-components/nav/sidebar/nav-sidebar.component';
import * as import26 from '../nav/sidebar/nav-sidebar.component.ngfactory';
export class Wrapper_AppComponent {
  context:import0.AppComponent;
  changed:boolean;
  /*private*/ _expr_0:any;
  constructor(p0:any,p1:any) {
    this.changed = false;
    this.context = new import0.AppComponent(p0,p1);
    this._expr_0 = import1.UNINITIALIZED;
  }
  detectChangesInInputProps(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  detectChangesInHostProps(view:import2.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_0:any = this.context.appState.state.isAuthenticated;
    if (import3.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      view.renderer.setElementClass(el,'authenticated',currVal_0);
      this._expr_0 = currVal_0;
    }
  }
}
const nodeDebugInfos_AppComponent_Host0:import4.StaticNodeDebugInfo[] = [new import4.StaticNodeDebugInfo([import0.AppComponent],import0.AppComponent,{})];
var renderType_AppComponent_Host:import5.RenderComponentType = (null as any);
class _View_AppComponent_Host0 extends import2.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import6.AppElement;
  _AppComponent_0_4:Wrapper_AppComponent;
  constructor(viewUtils:import3.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement) {
    super(_View_AppComponent_Host0,renderType_AppComponent_Host,import8.ViewType.HOST,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_AppComponent_Host0);
  }
  createInternal(rootSelector:string):import6.AppElement {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'body',import3.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import6.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AppComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AppComponent_0_4 = new Wrapper_AppComponent(this.parentInjector.get(import9.AppState),this.parentInjector.get(import10.Authentication));
    this._appEl_0.initComponent(this._AppComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._AppComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AppComponent) && (0 === requestNodeIndex))) { return this._AppComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._AppComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._AppComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      this.debug(0,0,0);
      if ((this.numberOfChecks === 0)) { this._AppComponent_0_4.context.ngAfterViewInit(); }
    }
  }
}
function viewFactory_AppComponent_Host0(viewUtils:import3.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement):import2.AppView<any> {
  if ((renderType_AppComponent_Host === (null as any))) { (renderType_AppComponent_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_AppComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AppComponentNgFactory:import12.ComponentFactory<import0.AppComponent> = new import12.ComponentFactory<import0.AppComponent>('body',viewFactory_AppComponent_Host0,import0.AppComponent);
const styles_AppComponent:any[] = ([] as any[]);
const nodeDebugInfos_AppComponent0:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import13.TemplateRef,
    import14.NgIf
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([
    import13.TemplateRef,
    import14.NgIf
  ]
  ,(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([import15.RouterOutlet],(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo([import16.NavFooterComponent],import16.NavFooterComponent,{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_AppComponent:import5.RenderComponentType = (null as any);
class _View_AppComponent0 extends import2.DebugAppView<import0.AppComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _appEl_3:import6.AppElement;
  _TemplateRef_3_5:any;
  _NgIf_3_6:import17.Wrapper_NgIf;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _appEl_5:import6.AppElement;
  _TemplateRef_5_5:any;
  _NgIf_5_6:import17.Wrapper_NgIf;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  /*private*/ _appEl_11:import6.AppElement;
  _RouterOutlet_11_5:import18.Wrapper_RouterOutlet;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  /*private*/ _appEl_17:import6.AppElement;
  _NavFooterComponent_17_4:import19.Wrapper_NavFooterComponent;
  _text_18:any;
  _text_19:any;
  _text_20:any;
  _el_21:any;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _text_26:any;
  /*private*/ _expr_37:any;
  _pipe_json_0:import20.JsonPipe;
  constructor(viewUtils:import3.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement) {
    super(_View_AppComponent0,renderType_AppComponent,import8.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_AppComponent0);
    this._expr_37 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import6.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',this.debug(0,0,22));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','app-container'),this.debug(1,1,0));
    this._text_2 = this.renderer.createText(this._el_1,'\n  ',this.debug(2,1,27));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,this.debug(3,2,2));
    this._appEl_3 = new import6.AppElement(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import13.TemplateRef_(this._appEl_3,viewFactory_AppComponent1);
    this._NgIf_3_6 = new import17.Wrapper_NgIf(this._appEl_3.vcRef,this._TemplateRef_3_5);
    this._text_4 = this.renderer.createText(this._el_1,'\n  ',this.debug(4,2,83));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_1,this.debug(5,3,2));
    this._appEl_5 = new import6.AppElement(5,1,this,this._anchor_5);
    this._TemplateRef_5_5 = new import13.TemplateRef_(this._appEl_5,viewFactory_AppComponent2);
    this._NgIf_5_6 = new import17.Wrapper_NgIf(this._appEl_5.vcRef,this._TemplateRef_5_5);
    this._text_6 = this.renderer.createText(this._el_1,'\n\n  ',this.debug(6,3,68));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'class','content-container'),this.debug(7,5,2));
    this._text_8 = this.renderer.createText(this._el_7,'\n    ',this.debug(8,5,33));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_7,'div',new import3.InlineArray2(2,'class','content'),this.debug(9,6,4));
    this._text_10 = this.renderer.createText(this._el_9,'\n      ',this.debug(10,6,25));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_9,'router-outlet',import3.EMPTY_INLINE_ARRAY,this.debug(11,7,6));
    this._appEl_11 = new import6.AppElement(11,9,this,this._el_11);
    this._RouterOutlet_11_5 = new import18.Wrapper_RouterOutlet(this.parentInjector.get(import21.RouterOutletMap),this._appEl_11.vcRef,this.parentInjector.get(import22.ComponentFactoryResolver),(null as any));
    this._text_12 = this.renderer.createText(this._el_9,'\n      ',this.debug(12,7,37));
    this._el_13 = import3.createRenderElement(this.renderer,this._el_9,'pre',new import3.InlineArray2(2,'class','app-state center-block'),this.debug(13,8,6));
    this._text_14 = this.renderer.createText(this._el_13,'',this.debug(14,8,42));
    this._text_15 = this.renderer.createText(this._el_9,'\n    ',this.debug(15,8,97));
    this._text_16 = this.renderer.createText(this._el_7,'\n    ',this.debug(16,9,10));
    this._el_17 = import3.createRenderElement(this.renderer,this._el_7,'nav-footer',import3.EMPTY_INLINE_ARRAY,this.debug(17,10,4));
    this._appEl_17 = new import6.AppElement(17,7,this,this._el_17);
    var compView_17:any = import19.viewFactory_NavFooterComponent0(this.viewUtils,this.injector(17),this._appEl_17);
    this._NavFooterComponent_17_4 = new import19.Wrapper_NavFooterComponent(this.parentInjector.get(import9.AppState),this.parentInjector.get(import10.Authentication));
    this._appEl_17.initComponent(this._NavFooterComponent_17_4.context,([] as any[]),compView_17);
    compView_17.create(this._NavFooterComponent_17_4.context,([] as any[]),(null as any));
    this._text_18 = this.renderer.createText(this._el_7,'\n  ',this.debug(18,10,29));
    this._text_19 = this.renderer.createText(this._el_1,'\n',this.debug(19,11,8));
    this._text_20 = this.renderer.createText(parentRenderNode,'\n',this.debug(20,12,6));
    this._el_21 = import3.createRenderElement(this.renderer,parentRenderNode,'a',new import3.InlineArray4(4,'class','hidden','id','manualForceChangeDetection'),this.debug(21,13,0));
    this._text_22 = this.renderer.createText(this._el_21,'Manual Detect Changes',this.debug(22,13,82));
    this._text_23 = this.renderer.createText(parentRenderNode,'\n',this.debug(23,13,107));
    this._el_24 = import3.createRenderElement(this.renderer,parentRenderNode,'a',new import3.InlineArray4(4,'class','hidden','id','autoForceChangeDetection'),this.debug(24,14,0));
    this._text_25 = this.renderer.createText(this._el_24,'Auto Detect Changes',this.debug(25,14,78));
    this._text_26 = this.renderer.createText(parentRenderNode,'\n\n',this.debug(26,14,101));
    this.debug((null as any),(null as any),(null as any));
    this._pipe_json_0 = new import20.JsonPipe();
    var disposable_0:Function = this.renderer.listen(this._el_21,'click',this.eventHandler(this._handle_click_21_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_24,'click',this.eventHandler(this._handle_click_24_0.bind(this)));
    this.init(([] as any[]),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._text_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._text_26
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import14.NgIf) && (3 === requestNodeIndex))) { return this._NgIf_3_6.context; }
    if (((token === import13.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import14.NgIf) && (5 === requestNodeIndex))) { return this._NgIf_5_6.context; }
    if (((token === import15.RouterOutlet) && (11 === requestNodeIndex))) { return this._RouterOutlet_11_5.context; }
    if (((token === import16.NavFooterComponent) && (17 === requestNodeIndex))) { return this._NavFooterComponent_17_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import1.ValueUnwrapper();
    this.debug(3,2,14);
    const currVal_3_0_0:any = this.context.appState.state.isAuthenticated;
    this._NgIf_3_6.check_ngIf(currVal_3_0_0,throwOnChange,false);
    this._NgIf_3_6.detectChangesInInputProps(this,this._anchor_3,throwOnChange);
    this.debug(5,3,15);
    const currVal_5_0_0:any = this.context.appState.state.isAuthenticated;
    this._NgIf_5_6.check_ngIf(currVal_5_0_0,throwOnChange,false);
    this._NgIf_5_6.detectChangesInInputProps(this,this._anchor_5,throwOnChange);
    this.debug(11,7,6);
    this._RouterOutlet_11_5.detectChangesInInputProps(this,this._el_11,throwOnChange);
    this.debug(17,10,4);
    this._NavFooterComponent_17_4.detectChangesInInputProps(this,this._el_17,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._RouterOutlet_11_5.detectChangesInHostProps(this,this._el_11,throwOnChange);
    this.debug(14,8,42);
    valUnwrapper.reset();
    const currVal_37:any = import3.interpolate(1,'this.appState.state = ',valUnwrapper.unwrap(this._pipe_json_0.transform(this.context.appState.state)),'');
    if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange,this._expr_37,currVal_37))) {
      this.renderer.setText(this._text_14,currVal_37);
      this._expr_37 = currVal_37;
    }
    this._NavFooterComponent_17_4.detectChangesInHostProps(this,this._el_17,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this.debug(11,7,6);
    this._RouterOutlet_11_5.context.ngOnDestroy();
  }
  private _handle_click_21_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(21,13,50);
    const pd_21_0:any = ((<any>this.context.manualDetectChanges()) !== false);
    return (true && pd_21_0);
  }
  private _handle_click_24_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    this.debug(24,14,48);
    const pd_24_0:any = ((<any>this.context.autoDetectChanges()) !== false);
    return (true && pd_24_0);
  }
}
export function viewFactory_AppComponent0(viewUtils:import3.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement):import2.AppView<import0.AppComponent> {
  if ((renderType_AppComponent === (null as any))) { (renderType_AppComponent = viewUtils.createRenderComponentType('C:/Source/GitHub/angular2-webpack2-dotnet-starter/complete/frontend/src/app-components/app/app.template.html',0,import11.ViewEncapsulation.None,styles_AppComponent,{})); }
  return new _View_AppComponent0(viewUtils,parentInjector,declarationEl);
}
const nodeDebugInfos_AppComponent1:import4.StaticNodeDebugInfo[] = [new import4.StaticNodeDebugInfo([import23.NavHeaderComponent],import23.NavHeaderComponent,{})];
class _View_AppComponent1 extends import2.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import6.AppElement;
  _NavHeaderComponent_0_4:import24.Wrapper_NavHeaderComponent;
  constructor(viewUtils:import3.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement) {
    super(_View_AppComponent1,renderType_AppComponent,import8.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_AppComponent1);
  }
  createInternal(rootSelector:string):import6.AppElement {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'nav-header',new import3.InlineArray2(2,'class','clearfix'),this.debug(0,2,2));
    this._appEl_0 = new import6.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import24.viewFactory_NavHeaderComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._NavHeaderComponent_0_4 = new import24.Wrapper_NavHeaderComponent(this.parent.parentInjector.get(import9.AppState));
    this._appEl_0.initComponent(this._NavHeaderComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._NavHeaderComponent_0_4.context,([] as any[]),(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import23.NavHeaderComponent) && (0 === requestNodeIndex))) { return this._NavHeaderComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,2,2);
    this._NavHeaderComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._NavHeaderComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_AppComponent1(viewUtils:import3.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement):import2.AppView<any> {
  return new _View_AppComponent1(viewUtils,parentInjector,declarationEl);
}
const nodeDebugInfos_AppComponent2:import4.StaticNodeDebugInfo[] = [new import4.StaticNodeDebugInfo([import25.NavSidebarComponent],import25.NavSidebarComponent,{})];
class _View_AppComponent2 extends import2.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import6.AppElement;
  _NavSidebarComponent_0_4:import26.Wrapper_NavSidebarComponent;
  constructor(viewUtils:import3.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement) {
    super(_View_AppComponent2,renderType_AppComponent,import8.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_AppComponent2);
  }
  createInternal(rootSelector:string):import6.AppElement {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'nav-sidebar',import3.EMPTY_INLINE_ARRAY,this.debug(0,3,2));
    this._appEl_0 = new import6.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import26.viewFactory_NavSidebarComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._NavSidebarComponent_0_4 = new import26.Wrapper_NavSidebarComponent(this.parent.parentInjector.get(import9.AppState));
    this._appEl_0.initComponent(this._NavSidebarComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._NavSidebarComponent_0_4.context,([] as any[]),(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import25.NavSidebarComponent) && (0 === requestNodeIndex))) { return this._NavSidebarComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,3,2);
    this._NavSidebarComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._NavSidebarComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_AppComponent2(viewUtils:import3.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement):import2.AppView<any> {
  return new _View_AppComponent2(viewUtils,parentInjector,declarationEl);
}