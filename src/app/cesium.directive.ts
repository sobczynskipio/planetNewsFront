import { Directive, OnInit, ElementRef } from '@angular/core';
import { NewsService } from "./rest_service/news.service";
import { News } from "src/app/models/news";
import { BillboardLabel } from "src/app/models/billboard/billboardLabel";
import { Billboard } from "src/app/models/billboard/billboard";

@Directive({
  selector: '[appCesium]'
})
export class CesiumDirective implements OnInit{
	news;
	viewer;

  constructor(private el: ElementRef, private newsService: NewsService) { 
  		newsService.getLodzNews().subscribe((data: News[]) => {
			this.news = data;
  			for (let theNews of data){
				var billboardLabel = new BillboardLabel("Some Text");
				var myBillboard = new Billboard("http://localhost:8080"+theNews.imageLink, theNews.longitude, theNews.latitude);
				var newsBillboard = this.viewer.entities.add(myBillboard);
  			}
			this.viewer.zoomTo(newsBillboard);
		});
  }

  ngOnInit() {
	// Put initialization code for the Cesium viewer here3
	const viewer = new Cesium.Viewer(this.el.nativeElement, {
	    imageryProvider : new Cesium.ArcGisMapServerImageryProvider({
	        url : 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
	    }),
	    baseLayerPicker : false,
	    infoBox : false
	});
	this.viewer = viewer;
  }
}