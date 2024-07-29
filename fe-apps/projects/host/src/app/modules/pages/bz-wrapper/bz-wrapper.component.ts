import { Component, OnInit, ViewContainerRef, ComponentRef, EventEmitter, OnDestroy, ViewChild, ChangeDetectorRef, Type } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-bz-wrapper',
  template: ''
})
export class BzWrapperComponent implements OnInit {

  // @ViewChild("app-bz-wrapper", { static: true, read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;

  private component!: ComponentRef<any>;

  constructor(private changeDetectorRef: ChangeDetectorRef,   private viewContainerRef: ViewContainerRef,    ) { }

  ngOnInit(): void {
    this.setCdr(this.changeDetectorRef);
    this.setViewContainerRef(this.viewContainerRef);
    this.loadComponet();
  }

  public setCdr(changeDetectorRef: ChangeDetectorRef): void {
    this.changeDetectorRef = changeDetectorRef;
  }
  public setViewContainerRef(viewContainerRef: ViewContainerRef): void {
    this.viewContainerRef = viewContainerRef;
  }

  public setComponent<T>(component: Type<T>): ComponentRef<T> {
    this.viewContainerRef.clear();
    this.component = this.viewContainerRef.createComponent<T>(component);
    this.changeDetectorRef.detectChanges();
    return this.component;
  }

  public instance<T>(): T {
    return (this.component as ComponentRef<T>).instance;
  }

  private async loadComponet() {
    const { PokemonCardsComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:8080/js/remoteEntry.js',
      remoteName: 'blazormodule',
      exposedModule: './PokemonCards',
    });

    console.log('loadPokemonCardsComponent', PokemonCardsComponent);    
    this.setComponent(PokemonCardsComponent)

    this.component.instance.startFromId = 11;    
  }
}




