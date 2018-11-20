import { NgModule } from '@angular/core';
import { ProductComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductDetailsComponent } from './product-details.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsGuard } from './product-details.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductComponent },
      { path: 'products/:id', component: ProductDetailsComponent, canActivate: [ProductDetailsGuard] },
    ]),
    SharedModule
  ],
  declarations: [
    ProductComponent,
    ConvertToSpacesPipe,
    ProductDetailsComponent
  ]
})
export class ProductModule { }
