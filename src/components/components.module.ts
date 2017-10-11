import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular'

import { LoginFormComponent } from './login-form/login-form';
import { RegisterFormComponent } from './register-form/register-form';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form';

@NgModule({
	declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent],
	imports: [IonicModule],
	exports: [
    LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent]
})
export class ComponentsModule {}
