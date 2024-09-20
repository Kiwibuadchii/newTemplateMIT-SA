import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent {

  search: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private router:Router) { }
  toLogin(){
    this.router.navigateByUrl('login')
  }

  routerActive: string = "activelink";

  sidebarMenu: sidebarMenu[] = [
    {
      link: "/home",
      icon: "home",
      menu: "Dashboard",
    },
    {
      link: "/orderlist",
      icon: "home",
      menu: "Create Order",
    },
    {
      link: "/orderconfirm",
      icon: "home",
      menu: "Receive Order",
    },
    {
      link: "/taglist",
      icon: "home",
      menu: "Received Tags",
    },
    {
      link: "/isuueorder",
      icon: "home",
      menu: "Create Issue Order",
    },
    {
      link: "/confirmissue",
      icon: "home",
      menu: "Issue Order",
    },
    // {
    //   link: "/button",
    //   icon: "disc",
    //   menu: "Buttons",
    // },
    // {
    //   link: "/forms",
    //   icon: "layout",
    //   menu: "Forms",
    // },
    // {
    //   link: "/alerts",
    //   icon: "info",
    //   menu: "Alerts",
    // },
    // {
    //   link: "/grid-list",
    //   icon: "file-text",
    //   menu: "Grid List",
    // },
    // {
    //   link: "/menu",
    //   icon: "menu",
    //   menu: "Menus",
    // },
    // {
    //   link: "/table",
    //   icon: "grid",
    //   menu: "Tables",
    // },
    // {
    //   link: "/expansion",
    //   icon: "divide-circle",
    //   menu: "Expansion Panel",
    // },
    // {
    //   link: "/chips",
    //   icon: "award",
    //   menu: "Chips",
    // },
    // {
    //   link: "/tabs",
    //   icon: "list",
    //   menu: "Tabs",
    // },
    {
      link: "/progress",
      icon: "bar-chart-2",
      menu: "Report",
    },
    // {
    //   link: "/toolbar",
    //   icon: "voicemail",
    //   menu: "Toolbar",
    // },
    // {
    //   link: "/progress-snipper",
    //   icon: "loader",
    //   menu: "Progress Snipper",
    // },
    // {
    //   link: "/tooltip",
    //   icon: "bell",
    //   menu: "Tooltip",
    // },
    // {
    //   link: "/snackbar",
    //   icon: "slack",
    //   menu: "Snackbar",
    // },
    // {
    //   link: "/slider",
    //   icon: "sliders",
    //   menu: "Slider",
    // },
    // {
    //   link: "/slide-toggle",
    //   icon: "layers",
    //   menu: "Slide Toggle",
    // },
  ]

}
