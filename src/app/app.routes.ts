import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { DetailProductsComponent } from './component/detail-products/detail-products.component';
import { FlashSaleComponent } from './component/flash-sale/flash-sale.component';
import { HotDealComponent } from './component/hot-deal/hot-deal.component';
import { CartComponent } from './component/cart/cart.component';
import { PaymentComponent } from './component/payment/payment.component';
import { AuthorComponent } from './component/author/author.component';
import { SearchComponent } from './component/search/search.component';
import { DetailAuthorComponent } from './component/detail-author/detail-author.component';
import { GroupCategoriesComponent } from './component/book/group-categories/group-categories.component';
import { BookCatgoriesComponent } from './component/book/book-catgories/book-catgories.component';
import { SearchPublisherComponent } from './component/publisher/search-publisher/search-publisher.component';
import { DetailPublisherComponent } from './component/publisher/detail-publisher/detail-publisher.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path: 'detail-product', component: DetailProductsComponent},
  {path: 'flash-sale', component: FlashSaleComponent},
  {path: 'hot-deal', component: HotDealComponent},
  {path: 'cart', component: CartComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'author', component: AuthorComponent},
  {path: 'search', component: SearchComponent},
  {path: 'detail-author/:subAuthor_detail', component: DetailAuthorComponent},
  {path: 'group-categories', component: GroupCategoriesComponent},
  {path: 'book-categories/:subCategory', component: BookCatgoriesComponent},
  {path: 'search-publisher', component: SearchPublisherComponent},
  {path: 'detail-publisher/:subDetail_publisher', component: DetailPublisherComponent},
];
