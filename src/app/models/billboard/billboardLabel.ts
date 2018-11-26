import { Injectable } from '@angular/core';

@Injectable()
export class BillboardLabel{

    private text : string;
    private font : string;
    private style: any;//Cesium.LabelStyle;
    private outlineWidth: number;
    private verticalOrigin: any;//Cesium.VerticalOrigin;
    private pixelOffset: any;//Cesium.Cartesian2;

    constructor(text : string) {
        this.text = text;
	    this.font = '14pt monospace';
	    this.style = Cesium.LabelStyle.FILL_AND_OUTLINE;
	    this.outlineWidth = 2;
	    this.verticalOrigin = Cesium.VerticalOrigin.TOP;
	    this.pixelOffset = new Cesium.Cartesian2(0, 32);
    }
}