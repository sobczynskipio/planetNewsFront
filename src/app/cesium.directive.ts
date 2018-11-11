import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCesium]'
})
export class CesiumDirective implements OnInit{

  constructor(private el: ElementRef) { }

  ngOnInit() {
  // Put initialization code for the Cesium viewer here
  const viewer = new Cesium.Viewer(this.el.nativeElement);
  }

}
