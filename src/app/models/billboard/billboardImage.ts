export class BillboardImage{
    private image: string;
    private width: number;
	private height: number;

	constructor(imageLink: string) {
		this.image = imageLink;
		this.width = 64;
		this.height = 64;
	}
}