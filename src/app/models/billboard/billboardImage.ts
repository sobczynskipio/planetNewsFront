export default class BillboardImage{
    private imageLink: string;//"http://localhost:8080"+this.news[0].imageLink,//'assets/images/Philadelphia_Phillies.png',
    private width: number; //64,
	private height: number; //64

	constructor(public imageLink: string) {
		this.imageLink = imageLink;
		this.width = 64;
		this.height = 64;
	}
}