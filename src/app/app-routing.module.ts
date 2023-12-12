import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { MedicalComponent } from "./medical/medical.component";
import { ConsentComponent } from "./consent/consent.component";
import { ConfirmComponent } from "./confirm/confirm.component";
import { PersonalComponent } from "./personal/personal.component";

const routes: Routes= [
    {path: 'personal', component: PersonalComponent},
    {path: "medical",component: MedicalComponent},
    {path: "consent", component: ConsentComponent},
    {path: "confirm", component: ConfirmComponent},

    {path:'',redirectTo:'personal',pathMatch:'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }