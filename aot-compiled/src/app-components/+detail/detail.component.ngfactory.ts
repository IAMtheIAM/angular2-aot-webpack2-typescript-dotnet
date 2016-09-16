/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/debug_context';
import * as import1 from '../../../../src/app-components/+detail/detail.component';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view';
import * as import4 from '@angular/core/src/linker/element';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/router/src/directives/router_outlet';
import * as import12 from '@angular/router/src/router_outlet_map';
import * as import13 from '@angular/core/src/linker/component_factory_resolver';
const nodeDebugInfos_DetailComponent_Host0:import0.StaticNodeDebugInfo[] = [new import0.StaticNodeDebugInfo([import1.DetailComponent],import1.DetailComponent,{})];
var renderType_DetailComponent_Host:import2.RenderComponentType = (null as any);
class _View_DetailComponent_Host0 extends import3.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import4.AppElement;
  _DetailComponent_0_4:import1.DetailComponent;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_DetailComponent_Host0,renderType_DetailComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_DetailComponent_Host0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    this._el_0 = this.selectOrCreateHostElement('detail',rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import4.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_DetailComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._DetailComponent_0_4 = new import1.DetailComponent();
    this._appEl_0.initComponent(this._DetailComponent_0_4,[],compView_0);
    compView_0.create(this._DetailComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import1.DetailComponent) && (0 === requestNodeIndex))) { return this._DetailComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._DetailComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_DetailComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<any> {
  if ((renderType_DetailComponent_Host === (null as any))) { (renderType_DetailComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_DetailComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const DetailComponentNgFactory:import10.ComponentFactory<import1.DetailComponent> = new import10.ComponentFactory<import1.DetailComponent>('detail',viewFactory_DetailComponent_Host0,import1.DetailComponent);
const styles_DetailComponent:any[] = [];
const nodeDebugInfos_DetailComponent0:import0.StaticNodeDebugInfo[] = [
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{}),
  new import0.StaticNodeDebugInfo([import11.RouterOutlet],(null as any),{}),
  new import0.StaticNodeDebugInfo([],(null as any),{})
]
;
var renderType_DetailComponent:import2.RenderComponentType = (null as any);
class _View_DetailComponent0 extends import3.DebugAppView<import1.DetailComponent> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  /*private*/ _appEl_3:import4.AppElement;
  _RouterOutlet_3_5:import11.RouterOutlet;
  _text_4:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement) {
    super(_View_DetailComponent0,renderType_DetailComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_DetailComponent0);
  }
  createInternal(rootSelector:string):import4.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'h1',this.debug(0,0,0));
    this._text_1 = this.renderer.createText(this._el_0,'Hello from Detail',this.debug(1,0,4));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',this.debug(2,0,26));
    this._el_3 = this.renderer.createElement(parentRenderNode,'router-outlet',this.debug(3,1,0));
    this._appEl_3 = new import4.AppElement(3,(null as any),this,this._el_3);
    this._RouterOutlet_3_5 = new import11.RouterOutlet(this.parentInjector.get(import12.RouterOutletMap),this._appEl_3.vcRef,this.parentInjector.get(import13.ComponentFactoryResolver),(null as any));
    this._text_4 = this.renderer.createText(parentRenderNode,'\n',this.debug(4,1,31));
    this.init([],[
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.RouterOutlet) && (3 === requestNodeIndex))) { return this._RouterOutlet_3_5; }
    return notFoundResult;
  }
  destroyInternal():void {
    this.debug(3,1,0);
    this._RouterOutlet_3_5.ngOnDestroy();
  }
}
export function viewFactory_DetailComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import4.AppElement):import3.AppView<import1.DetailComponent> {
  if ((renderType_DetailComponent === (null as any))) { (renderType_DetailComponent = viewUtils.createRenderComponentType('C:/Source/Atlas/src/app-components/+detail/detail.template.html',0,import9.ViewEncapsulation.None,styles_DetailComponent,{})); }
  return new _View_DetailComponent0(viewUtils,parentInjector,declarationEl);
}