import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppComponent } from './app';
import { routes } from './routes';
import { Avatar } from './components/avatar/avatar';
import { Dropdown } from './components/dropdown/dropdown';
import { DropdownButton } from './components/dropdown/dropdown-button/dropdown-button';
import { DropdownDivider } from './components/dropdown/dropdown-divider/dropdown-divider';
import { DropdownItem } from './components/dropdown/dropdown-item/dropdown-item';
import { DropdownLabel } from './components/dropdown/dropdown-label/dropdown-label';
import { DropdownMenu } from './components/dropdown/dropdown-menu/dropdown-menu';
import { Icon } from './components/icon/icon';
import { Navbar } from './components/navbar/navbar';
import { NavbarItem } from './components/navbar/navbar-item/navbar-item';
import { NavbarSection } from './components/navbar/navbar-section/navbar-section';
import { NavbarSpacer } from './components/navbar/navbar-spacer/navbar-spacer';
import { SidebarComponent } from './components/sidebar/sidebar';
import { SidebarBody } from './components/sidebar/sidebar-body/sidebar-body';
import { SidebarFooter } from './components/sidebar/sidebar-footer/sidebar-footer';
import { SidebarHeader } from './components/sidebar/sidebar-header/sidebar-header';
import { SidebarHeading } from './components/sidebar/sidebar-heading/sidebar-heading';
import { SidebarItem } from './components/sidebar/sidebar-item/sidebar-item';
import { SidebarLabel } from './components/sidebar/sidebar-label/sidebar-label';
import { SidebarSection } from './components/sidebar/sidebar-section/sidebar-section';
import { SidebarSpacer } from './components/sidebar/sidebar-spacer/sidebar-spacer';
import { BaseLayout } from './layout/base/base';
import { SidebarLayout } from './layout/sidebar/sidebar';
import { DashboardPage } from './page/dashboard/dashboard';
import { StatisticPage } from './page/statistic/statistic';

registerLocaleData(localeFr, 'fr-FR');

@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent,
		BaseLayout,
		SidebarLayout,
		DashboardPage,
		StatisticPage,
		SidebarHeader,
		Dropdown,
		DropdownButton,
		DropdownMenu,
		DropdownLabel,
		DropdownItem,
		SidebarLabel,
		DropdownDivider,
		Avatar,
		Icon,
		SidebarSection,
		SidebarItem,
		SidebarBody,
		SidebarHeading,
		SidebarSpacer,
		SidebarFooter,
		Navbar,
		NavbarSpacer,
		NavbarSection,
		NavbarItem,
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
		NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
		FontAwesomeModule
	],
	exports: [],
	bootstrap: [AppComponent],
	providers: [
		{ provide: LOCALE_ID, useValue: "fr-FR" },

	],
})
export class AppModule { }
