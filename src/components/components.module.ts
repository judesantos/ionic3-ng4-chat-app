import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular'

import { LoginFormComponent } from './login-form/login-form';
import { RegisterFormComponent } from './register-form/register-form';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form';
import { ProfileComponent } from './profile/profile';
import { ProfileSearchComponent } from './profile-search/profile-search';
import { MessageBoxComponent } from './message-box/message-box';

@NgModule({
	declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent,
    ProfileComponent,
    ProfileSearchComponent,
    MessageBoxComponent],
	imports: [IonicModule],
	exports: [
    LoginFormComponent,
    RegisterFormComponent,
    EditProfileFormComponent,
    ProfileComponent,
    ProfileSearchComponent,
    MessageBoxComponent]
})
export class ComponentsModule {}
