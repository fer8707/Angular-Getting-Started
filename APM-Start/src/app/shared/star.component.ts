import { Component } from "@angular/core";

@Component ({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent {
    rating: number = 4;
    cropWidth: number = 75;
    ngOnChanges(): void {
        this.cropWidth= this.rating* 75/5;
    }

}