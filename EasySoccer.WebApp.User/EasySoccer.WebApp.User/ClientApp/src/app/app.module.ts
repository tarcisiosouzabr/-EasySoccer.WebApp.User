import { BrowserModule } from "@angular/platform-browser";
import { LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import localePt from "@angular/common/locales/pt";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";
import { NgbDateParserFormatter, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CompanyDetailComponent } from "./company-detail/company-detail.component";
import { CookieService } from "ngx-cookie-service";
import { CustomInterceptorInterceptor } from "./interceptor/custom-interceptor.interceptor";
import { LoaderComponent } from "./loader/loader.component";
import { LoaderModule } from "./loader/loader.module";
import { NgxLoadingModule } from "ngx-loading";
import { registerLocaleData } from "@angular/common";
import { CustomDateParserFormatter } from "./adapters/NgbdDatepickerAdapter";
import { CreatePersonComponent } from "./modal/create-person/create-person.component";
import { NgxMaskModule, IConfig } from "ngx-mask";
import { CreateReservationComponent } from "./modal/create-reservation/create-reservation.component";
import { LoginComponent } from "./modal/login/login.component";
import { ModalComponent } from "./modal/modal/modal.component";
import { LogoutComponent } from "./modal/logout/logout.component";
import { MyreservationsComponent } from "./myreservations/myreservations.component";
import { ToastComponent } from "./base/toast/toast.component";
import { APP_BASE_HREF } from "@angular/common";
import { ForgotPasswordComponent } from "./modal/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { CompaniesComponent } from "./companies/companies.component";
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
registerLocaleData(localePt, "pt-BR");
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CompanyDetailComponent,
    LoaderComponent,
    CreatePersonComponent,
    CreateReservationComponent,
    LoginComponent,
    ModalComponent,
    LogoutComponent,
    MyreservationsComponent,
    ToastComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    CompaniesComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: CompaniesComponent, pathMatch: "full" },
      {
        path: "companydetail/:companyId",
        component: CompanyDetailComponent,
      },
      {
        path: "myreservations",
        component: MyreservationsComponent,
      },
      {
        path: "resetpassword/:token",
        component: ResetPasswordComponent,
      },
    ]),
    NgbModule,
    LoaderModule,
    NgxLoadingModule.forRoot({ fullScreenBackdrop: true }),
    NgxMaskModule.forRoot(),
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptorInterceptor,
      multi: true,
    },
    {
      provide: LOCALE_ID,
      useValue: "pt-BR",
    },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
    { provide: APP_BASE_HREF, useValue: "/" },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
