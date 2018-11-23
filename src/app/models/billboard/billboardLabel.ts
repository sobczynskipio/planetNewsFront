export default class BillboardLabel{

    private text : string;
    private font : string;
    private style: Cesium.LabelStyle;
    private outlineWidth: number;
    private verticalOrigin: Cesium.VerticalOrigin;
    private pixelOffset: Cesium.Cartesian2;

    constructor() {
        this.text = 'Citizens Bank Park';
	    this.font = '14pt monospace';
	    this.style = Cesium.LabelStyle.FILL_AND_OUTLINE;
	    this.outlineWidth = 2;
	    this.verticalOrigin = Cesium.VerticalOrigin.TOP;
	    this.pixelOffset = new Cesium.Cartesian2(0, 32);
    }
}