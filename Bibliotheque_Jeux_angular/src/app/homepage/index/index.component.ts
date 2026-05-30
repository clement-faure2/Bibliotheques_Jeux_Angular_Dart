import { Component } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { DescriptionComponent } from "../description/description.component";


@Component({
  selector: 'app-index',
  imports: [BannerComponent, DescriptionComponent,],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class HomepageIndexComponent {
}
