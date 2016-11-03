/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../../../../src/app-components/directives/ckeditor/ckeditor.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
import * as import4 from '@angular/core/src/linker/debug_context';
import * as import5 from '@angular/core/src/render/api';
import * as import6 from '@angular/core/src/linker/element';
import * as import7 from '@angular/core/src/di/injector';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
export class Wrapper_CKEditor {
  context:import0.CKEditor;
  changed:boolean;
  /*private*/ _expr_0:any;
  constructor() {
    this.changed = false;
    this.context = new import0.CKEditor();
    this._expr_0 = import1.UNINITIALIZED;
  }
  check_ckEditorInstanceID(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this.changed = true;
      this.context.ckEditorInstanceID = currValue;
      this._expr_0 = currValue;
    }
  }
  detectChangesInInputProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  detectChangesInHostProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
const nodeDebugInfos_CKEditor_Host0:import4.StaticNodeDebugInfo[] = [new import4.StaticNodeDebugInfo([import0.CKEditor],import0.CKEditor,{})];
var renderType_CKEditor_Host:import5.RenderComponentType = (null as any);
class _View_CKEditor_Host0 extends import3.DebugAppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import6.AppElement;
  _CKEditor_0_4:Wrapper_CKEditor;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement) {
    super(_View_CKEditor_Host0,renderType_CKEditor_Host,import8.ViewType.HOST,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_CKEditor_Host0);
  }
  createInternal(rootSelector:string):import6.AppElement {
    this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer,'ckeditor',import2.EMPTY_INLINE_ARRAY,rootSelector,this.debug(0,0,0));
    this._appEl_0 = new import6.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_CKEditor0(this.viewUtils,this.injector(0),this._appEl_0);
    this._CKEditor_0_4 = new Wrapper_CKEditor();
    this._appEl_0.initComponent(this._CKEditor_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._CKEditor_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.CKEditor) && (0 === requestNodeIndex))) { return this._CKEditor_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.debug(0,0,0);
    this._CKEditor_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._CKEditor_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      this.debug(0,0,0);
      if ((this.numberOfChecks === 0)) { this._CKEditor_0_4.context.ngAfterViewInit(); }
    }
  }
}
function viewFactory_CKEditor_Host0(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement):import3.AppView<any> {
  if ((renderType_CKEditor_Host === (null as any))) { (renderType_CKEditor_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_CKEditor_Host0(viewUtils,parentInjector,declarationEl);
}
export const CKEditorNgFactory:import10.ComponentFactory<import0.CKEditor> = new import10.ComponentFactory<import0.CKEditor>('ckeditor',viewFactory_CKEditor_Host0,import0.CKEditor);
const styles_CKEditor:any[] = ([] as any[]);
const nodeDebugInfos_CKEditor0:import4.StaticNodeDebugInfo[] = [
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{}),
  new import4.StaticNodeDebugInfo(([] as any[]),(null as any),{})
]
;
var renderType_CKEditor:import5.RenderComponentType = (null as any);
class _View_CKEditor0 extends import3.DebugAppView<import0.CKEditor> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement) {
    super(_View_CKEditor0,renderType_CKEditor,import8.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways,nodeDebugInfos_CKEditor0);
    this._expr_5 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import6.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import2.createRenderElement(this.renderer,parentRenderNode,'div',import2.EMPTY_INLINE_ARRAY,this.debug(0,0,0));
    this._text_1 = this.renderer.createText(this._el_0,'Hello world! This is some default text for the ',this.debug(1,0,31));
    this._el_2 = import2.createRenderElement(this.renderer,this._el_0,'strong',import2.EMPTY_INLINE_ARRAY,this.debug(2,0,78));
    this._text_3 = this.renderer.createText(this._el_2,'rich text',this.debug(3,0,86));
    this._text_4 = this.renderer.createText(this._el_0,' editor, CKEditor!',this.debug(4,0,104));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    this.debug(0,0,5);
    const currVal_5:any = this.context.ckEditorInstanceID;
    if (import2.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementProperty(this._el_0,'id',currVal_5);
      this._expr_5 = currVal_5;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_CKEditor0(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import6.AppElement):import3.AppView<import0.CKEditor> {
  if ((renderType_CKEditor === (null as any))) { (renderType_CKEditor = viewUtils.createRenderComponentType('C:/Source/GitHub/angular2-webpack2-dotnet-starter/complete/frontend/src/app-components/directives/ckeditor/ckeditor.component.ts class CKEditor - inline template',0,import9.ViewEncapsulation.None,styles_CKEditor,{})); }
  return new _View_CKEditor0(viewUtils,parentInjector,declarationEl);
}