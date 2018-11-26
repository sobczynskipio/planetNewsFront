import { BillboardImage } from "src/app/models/billboard/billboardImage";
import { BillboardLabel } from "src/app/models/billboard/billboardLabel";
import { Injectable } from '@angular/core';

@Injectable()
export class Billboard{
	  private position : any;
	  private billboard : BillboardImage;
	  private label: BillboardLabel;

	  constructor(imageLink: string, longitude: number, latitude: number) {
	  	this.position = Cesium.Cartesian3.fromDegrees(longitude, latitude);
	  	this.billboard = new BillboardImage(imageLink);
	  	this.label = new BillboardLabel("Some Text");
	  }
}