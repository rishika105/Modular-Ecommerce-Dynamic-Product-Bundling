import { ProductListingComponent } from './product-listing/product-listing.component';
import { SavedCardsComponent } from './dashboard/user-dashboard/saved-cards/saved-cards.component';
import { SavedUPIComponent } from './dashboard/user-dashboard/saved-upi/saved-upi.component';
import { ManageCategoryComponent } from './dashboard/admin-dashboard/manage-category/manage-category.component';
import { AddCategoryComponent } from './dashboard/admin-dashboard/add-category/add-category.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { AddressManagerComponent } from './dashboard/user-dashboard/address/address.component';
import { Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutComponent } from './common/about/about.component';
import { ContactComponent } from './common/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './common/error/error.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { SellerDashboardComponent } from './dashboard/seller-dashboard/seller-dashboard.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { RoleGuard } from './guards/role.guard';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { AddProductComponent } from './dashboard/seller-dashboard/add-product/add-product.component';
import { ManageProductsComponent } from './dashboard/seller-dashboard/manage-products/manage-products.component';
import { CategoryComponent } from './category/category.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { StockManagementComponent } from './seller-dashboard/stock-management/stock-management.component';
import { StocksManagementComponent } from './dashboard/seller-dashboard/stock-management/stock-management.component';

// open routes
export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  { path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'products',
    component: ProductListingComponent
  }, // Browse all products
  {
    path: 'search',
    component: ProductListingComponent },   // Search specific products

  // private routes
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    children: [
      {path: "", redirectTo: "profile", pathMatch: "full"},
      { path: 'profile', component: ProfileComponent },
      {path: 'addCategory', component: AddCategoryComponent},
      {path: 'manageCategory', component: ManageCategoryComponent}
    ],
    data: { roles: ['ADMIN'] } // Only ADMIN can access this route
  },
  {
    path: 'seller-dashboard',
    component: SellerDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    children: [
      {path: "", redirectTo: "profile", pathMatch: "full"},
      { path: 'profile', component: ProfileComponent },
      { path: 'add-product', component: AddProductComponent},
      { path: 'manage-products', component: ManageProductsComponent},
      {path: 'edit-product/:id', component: AddProductComponent},
      {path: 'stocks', component: StocksManagementComponent}

    ],
    data: { roles: ['SELLER'] } // Only SELLER can access this route
  },
  //NESTED ROUTING
  {
    path: 'user-dashboard',
    component: UserDashboardComponent, // This contains the sidebar
    children: [
      {path: "", redirectTo: "profile", pathMatch: "full"},
      { path: 'profile', component: ProfileComponent },
      { path: 'address', component: AddressManagerComponent},
      {path: 'savedUPI', component: SavedUPIComponent},
      {path: 'savedCards', component: SavedCardsComponent},
      {path: 'wishlist', component: WishlistComponent}

      // Add more routes here for other dashboard pages
    ],
    canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['USER']}
  },

  {
    path: 'category/:id',
    component: CategoryComponent,
  },

  {
    path: 'product/:id',
    component: ProductCardComponent,
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard]
  },


  // Default route
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  // Wildcard route for 404 error page
  {
    path: '**',
    component: ErrorComponent,
  },
];
