/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../../../src/app-components/about/about.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/debug_context';
import * as import3 from '@angular/core/src/render/api';
import * as import4 from '@angular/core/src/linker/element';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '../../../../../src/app-components/services/appstate.service';
import * as import10 from '../../../../../src/app-components/services/authentication.service';
import * as import11 from '@angular/router/src/router_state';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
export class Wrapper_AboutComponent {
  context:import0.AboutComponent;
  changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this.changed = false;
    this.context = new import0.AboutComponent(p0,p1,p2);
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
const nodeDebugInfos_AboutComponent_Host0:import2.StaticNodeDebugInfo[] = [new import2.StaticNodeDebugInfo([import0.AboutComponent],import0.AboutComponent,{})];
var renderType_AboutComponent_Host:import3.RenderComponentType = (null as any);
class _View_AboutComponent_Host0 extends import1.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import4.AppElement;
  _AboutComponent_0_4:Wrapper_AboutComponent;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_AboutComponent_Host0,renderType_AboutComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_AboutComponent_Host0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = import5.selectOrCreateRenderHostElement(this.renderer,'about',import5.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import4.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AboutComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AboutComponent_0_4 = new Wrapper_AboutComponent(this.parentInjector.get(import9.AppState),this.parentInjector.get(import10.Authentication),this.parentInjector.get(import11.ActivatedRoute));
    this._appEl_0.initComponent(this._AboutComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._AboutComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AboutComponent) && (0 === requestNodeIndex))) { return this._AboutComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._AboutComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._AboutComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      this.debug(0,0,0);
      if ((this.numberOfChecks === 0)) { this._AboutComponent_0_4.context.ngAfterViewInit(); }
    }
  }
}
function viewFactory_AboutComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import1.AppView<any> {
  if ((renderType_AboutComponent_Host === (null as any))) { (renderType_AboutComponent_Host = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_AboutComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AboutComponentNgFactory:import13.ComponentFactory<import0.AboutComponent> = new import13.ComponentFactory<import0.AboutComponent>('about',viewFactory_AboutComponent_Host0,import0.AboutComponent);
const styles_AboutComponent:any[] = ([] as any[]);
const nodeDebugInfos_AboutComponent0:import2.StaticNodeDebugInfo[] = [
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import2.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_AboutComponent:import3.RenderComponentType = (null as any);
class _View_AboutComponent0 extends import1.DebugAppView<import0.AboutComponent> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_AboutComponent0,renderType_AboutComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_AboutComponent0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import5.createRenderElement(this.renderer,parentRenderNode,'h1',import5.EMPTY_INLINE_ARRAY,this.debug(0,0,0));
    this._text_1 = this.renderer.createText(this._el_0,'Hello about page!',this.debug(1,0,4));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',this.debug(2,0,26));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._text_2
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
}
export function viewFactory_AboutComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import1.AppView<import0.AboutComponent> {
  if ((renderType_AboutComponent === (null as any))) { (renderType_AboutComponent = viewUtils.createRenderComponentType('C:/Source/GitHub/angular2-webpack2-dotnet-starter/complete/frontend/src/app-components/about/about.template.html',0,import12.ViewEncapsulation.None,styles_AboutComponent,{})); }
  return new _View_AboutComponent0(viewUtils,parentInjector,declarationEl);
}