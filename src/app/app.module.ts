import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { RouterOutlet } from "@angular/router";
import { SharedModule } from "./shared/shared.module";
import { TaskModule } from "./task/tast.module";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, RouterOutlet, SharedModule, TaskModule]
})

export class AppModule {

}