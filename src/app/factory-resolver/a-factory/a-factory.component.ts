import { AfterViewInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, ComponentRef, OnDestroy } from '@angular/core';
import { BFactoryComponent } from '../b-factory/b-factory.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-a-factory',
  templateUrl: './a-factory.component.html',
  styleUrls: ['./a-factory.component.css']
})
export class AFactoryComponent implements AfterViewInit, OnDestroy {
  // We can get a reference to the template element with the ViewChild decorator that also takes a local variable as a parameter.
  destroy$: Subject<boolean> = new Subject<boolean>();
  // The default return from the ViewChild decorator is the component instance or the DOM element, but in our case, we need to get the element as ViewContainerRef.
  @ViewChild('vc', {read: ViewContainerRef}) _container: ViewContainerRef;
  componenRef: ComponentRef<any>;

  constructor(
    // The ComponentFactoryResolver service exposes one primary method, resolveComponentFactory.

    private _resolver: ComponentFactoryResolver
    ) {

  }

  ngAfterViewInit() {
      // Every time we need to create the component we need to remove the previous view, otherwise, it will append more components to the container.
      this._container.clear();
      // The resolveComponentFactory() method takes a component and returns a ComponentFactory.
      const cmpFactory = this._resolver.resolveComponentFactory(BFactoryComponent);
      // You can think of ComponentFactory as an object that knows how to create a component.
      this._container.createComponent(cmpFactory);
      // Now we have a reference to our new component, and we can set the property for that component.
      // Example: this.componenRef.instance.type = 'something';
  }

  ngOnDestroy() {
    if (this.componenRef) {
      this.destroy$.next(true);
      this.destroy$.unsubscribe();
      this.componenRef.destroy();
    }
  }
}
