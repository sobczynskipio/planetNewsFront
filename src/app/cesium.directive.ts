import { Directive, OnInit, ElementRef } from '@angular/core';
import { NewsService } from "./rest_service/news.service";
import { News } from "src/app/models/news";

@Directive({
  selector: '[appCesium]'
})
export class CesiumDirective implements OnInit{
	news;
	viewer;

  constructor(private el: ElementRef, private newsService: NewsService) { 
  		newsService.getLodzNews().subscribe((data: News[]) => {
  			this.news = data; console.dir(this.news[0].imageLink)

		var citizensBankPark = this.viewer.entities.add(
			{
			  position : Cesium.Cartesian3.fromDegrees(this.news[0].longitude, this.news[0].latitude),
			  billboard : {
			    image : "http://localhost:8080"+this.news[0].imageLink,
			    width : 64,
			    height : 64
			  },
			  label : {
			    text : 'Citizens Bank Park',
			    font : '14pt monospace',
			    style: Cesium.LabelStyle.FILL_AND_OUTLINE,
			    outlineWidth : 2,
			    verticalOrigin : Cesium.VerticalOrigin.TOP,
			    pixelOffset : new Cesium.Cartesian2(0, 32)
			  }
			});

		this.viewer.zoomTo(citizensBankPark);

  		});
  }

  ngOnInit() {
	// Put initialization code for the Cesium viewer here3
	const viewer = new Cesium.Viewer(this.el.nativeElement);
	this.viewer = viewer;  
  }
}
