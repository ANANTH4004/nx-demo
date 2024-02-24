import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideState } from '@ngrx/store';
import { productFeature } from '../store/products.selector';

@Component({
  selector: 'nx-demo-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  @Input() categoryName :string = '';
}
