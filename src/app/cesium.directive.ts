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
  		//this.news = newsService.getLodzNews();
  		newsService.getLodzNews().subscribe((data: News[]) => {
  			this.news = data; console.dir(this.news[0].imageLink)

		var citizensBankPark = this.viewer.entities.add({position : Cesium.Cartesian3.fromDegrees(-75.166493, 39.9060534),
			  billboard : {
			    image : this.news[0].imageLink,//'assets/images/Philadelphia_Phillies.png',
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
  	console.log("inicjuje");
	// Put initialization code for the Cesium viewer here3
	const viewer = new Cesium.Viewer(this.el.nativeElement);
	this.viewer = viewer;

    /*let wyoming = viewer.entities.add({
	  name : 'Wyoming',
	  polygon : {
	    hierarchy : Cesium.Cartesian3.fromDegreesArray([
	                              -109.080842,45.002073,
	                              -105.91517,45.002073,
	                              -104.058488,44.996596,
	                              -104.053011,43.002989,
	                              -104.053011,41.003906,
	                              -105.728954,40.998429,
	                              -107.919731,41.003906,
	                              -109.04798,40.998429,
	                              -111.047063,40.998429,
	                              -111.047063,42.000709,
	                              -111.047063,44.476286,
	                              -111.05254,45.002073]),
	    height : 0,
	    material : Cesium.Color.RED.withAlpha(0.5),
	    outline : true,
	    outlineColor : Cesium.Color.BLACK
	  }
	});*/

	/*var citizensBankPark = viewer.entities.add({position : Cesium.Cartesian3.fromDegrees(-75.166493, 39.9060534),
	  billboard : {
	    image : 'assets/images/Philadelphia_Phillies.png',
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
	});*/


  //viewer.zoomTo(citizensBankPark);
  }
}
