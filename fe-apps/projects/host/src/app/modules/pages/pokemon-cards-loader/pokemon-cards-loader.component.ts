import { Component, OnInit, ViewContainerRef, ComponentRef, EventEmitter, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-cards-loader',
  template: ''
})
export class PokemonCardsLoaderComponent implements OnInit, OnDestroy {
  private componentRef: ComponentRef<{
    startFromId: number;
    onDataLoaded: EventEmitter<any>;
  }> | null = null;
  private routerSubscription: Subscription | undefined;
  constructor(
    private vcref: ViewContainerRef,    
    private router: Router
  ) { }

  async ngOnInit() {
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.loadPokemonCardsComponent();
    });

    // Initial load
    await this.loadPokemonCardsComponent();
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }

    if (this.componentRef) {
      console.log('ngOnDestroy')
      this.componentRef.destroy();
    }
  }


  private async loadPokemonCardsComponent() {
    const { PokemonCardsComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:8080/js/remoteEntry.js',
      remoteName: 'blazormodule',
      exposedModule: './PokemonCards',
    });

    console.log('loadPokemonCardsComponent', PokemonCardsComponent);
    this.componentRef = this.vcref.createComponent(PokemonCardsComponent);

    this.componentRef.instance.startFromId = 11;
    this.componentRef.instance.onDataLoaded.subscribe(evt => console.log('API Data Loaded'));
  }
}




