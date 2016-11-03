/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../../../../src/app-components/+iframe-module/webpage-2/webpage-2.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/element';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '../../../../../../src/app-components/services/appstate.service';
import * as import10 from '../../../../../../src/app-components/services/authentication.service';
import * as import11 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from '@angular/router/src/directives/router_outlet';
import * as import15 from '../../../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import16 from '@angular/router/src/router_outlet_map';
import * as import17 from '@angular/core/src/linker/component_factory_resolver';
import * as import18 from '@angular/core/src/security';
export class Wrapper_Webpage2 {
  context:import0.Webpage2;
  changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this.changed = false;
    this.context = new import0.Webpage2(p0,p1,p2);
  }
  detectChangesInInputProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  detectChangesInHostProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
const nodeDebugInfos_Webpage2_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.Webpage2],import0.Webpage2,{})];
var renderType_Webpage2_Host:import3.RenderComponentType = (null as any);
class _View_Webpage2_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import4.AppElement;
  _Webpage2_0_4:Wrapper_Webpage2;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_Webpage2_Host0,renderType_Webpage2_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_Webpage2_Host0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = import5.selectOrCreateRenderHostElement(this.renderer,'webpage2',import5.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import4.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_Webpage20(this.viewUtils,this.injector(0),this._appEl_0);
    this._Webpage2_0_4 = new Wrapper_Webpage2(this.parentInjector.get(import9.AppState),this.parentInjector.get(import10.Authentication),this.parentInjector.get(import11.DomSanitizer));
    this._appEl_0.initComponent(this._Webpage2_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._Webpage2_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.Webpage2) && (0 === requestNodeIndex))) { return this._Webpage2_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._Webpage2_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._Webpage2_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      this.debug(0,0,0);
      if ((this.numberOfChecks === 0)) { this._Webpage2_0_4.context.ngAfterViewInit(); }
    }
  }
}
function viewFactory_Webpage2_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import1.AppView<any> {
  if ((renderType_Webpage2_Host === (null as any))) { (renderType_Webpage2_Host = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_Webpage2_Host0(viewUtils,parentInjector,declarationEl);
}
export const Webpage2NgFactory:import13.ComponentFactory<import0.Webpage2> = new import13.ComponentFactory<import0.Webpage2>('webpage2',viewFactory_Webpage2_Host0,import0.Webpage2);
const styles_Webpage2:any[] = ([] as any[]);
const nodeDebugInfos_Webpage20:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo([import14.RouterOutlet],(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_Webpage2:import3.RenderComponentType = (null as any);
class _View_Webpage20 extends import1.DebugAppView<import0.Webpage2> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _text_3:any;
  _text_4:any;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  /*private*/ _appEl_14:import4.AppElement;
  _RouterOutlet_14_5:import15.Wrapper_RouterOutlet;
  _text_15:any;
  /*private*/ _expr_18:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_Webpage20,renderType_Webpage2,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_Webpage20);
    this._expr_18 = import8.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import4.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import5.createRenderElement(this.renderer,parentRenderNode,'h1',import5.EMPTY_INLINE_ARRAY,this.debug(0,0,0));
    this._text_1 = this.renderer.createText(this._el_0,'Webpage2 (sub module)',this.debug(1,0,4));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',this.debug(2,0,30));
    this._text_3 = this.renderer.createText(parentRenderNode,'\n   ',this.debug(3,1,24));
    this._text_4 = this.renderer.createText(parentRenderNode,'\n      ',this.debug(4,2,30));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n         ',this.debug(5,3,37));
    this._text_6 = this.renderer.createText(parentRenderNode,'\n          ',this.debug(6,4,97));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n          ',this.debug(7,5,144));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n      ',this.debug(8,6,24));
    this._text_9 = this.renderer.createText(parentRenderNode,'\n   ',this.debug(9,7,19));
    this._text_10 = this.renderer.createText(parentRenderNode,'\n',this.debug(10,8,16));
    this._text_11 = this.renderer.createText(parentRenderNode,'\n',this.debug(11,9,13));
    this._el_12 = import5.createRenderElement(this.renderer,parentRenderNode,'iframe',new import5.InlineArray4(4,'height','100%','width','100%'),this.debug(12,10,0));
    this._text_13 = this.renderer.createText(parentRenderNode,'\n\n',this.debug(13,10,60));
    this._el_14 = import5.createRenderElement(this.renderer,parentRenderNode,'router-outlet',import5.EMPTY_INLINE_ARRAY,this.debug(14,12,0));
    this._appEl_14 = new import4.AppElement(14,(null as any),this,this._el_14);
    this._RouterOutlet_14_5 = new import15.Wrapper_RouterOutlet(this.parentInjector.get(import16.RouterOutletMap),this._appEl_14.vcRef,this.parentInjector.get(import17.ComponentFactoryResolver),(null as any));
    this._text_15 = this.renderer.createText(parentRenderNode,'\n',this.debug(15,12,31));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._text_2,
      this._text_3,
      this._text_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._text_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.RouterOutlet) && (14 === requestNodeIndex))) { return this._RouterOutlet_14_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(14,12,0);
    this._RouterOutlet_14_5.detectChangesInInputProps(this,this._el_14,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.debug(12,10,35);
    const currVal_18:any = this.context.someUrl;
    if (import5.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setElementProperty(this._el_12,'src',this.viewUtils.sanitizer.sanitize(import18.SecurityContext.RESOURCE_URL,currVal_18));
      this._expr_18 = currVal_18;
    }
    this._RouterOutlet_14_5.detectChangesInHostProps(this,this._el_14,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this.debug(14,12,0);
    this._RouterOutlet_14_5.context.ngOnDestroy();
  }
}
export function viewFactory_Webpage20(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import1.AppView<import0.Webpage2> {
  if ((renderType_Webpage2 === (null as any))) { (renderType_Webpage2 = viewUtils.createRenderComponentType('C:/Source/GitHub/angular2-webpack2-dotnet-starter/complete/frontend/src/app-components/+iframe-module/webpage-2/webpage-2.template.html',0,import12.ViewEncapsulation.None,styles_Webpage2,{})); }
  return new _View_Webpage20(viewUtils,parentInjector,declarationEl);
}