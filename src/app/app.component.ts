import { Component, HostListener } from "@angular/core";
import { DownloadService } from "./download.service";
import { DownloadManagerComponent } from "./download-manager/download-manager.component";
import { NgIf } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
    standalone: true,
    imports: [
        RouterOutlet,
        NgIf,
        DownloadManagerComponent,
    ],
})
export class AppComponent {
  title = "open-tv";

  constructor(private download: DownloadService) {}

  @HostListener("document:contextmenu", ["$event"])
  onRightClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (this.isInsideMenuTrigger(target)) {
      return;
    }
    event.preventDefault();
  }

  private isInsideMenuTrigger(element: HTMLElement): boolean {
    return !!element.closest("[mat-menu-trigger-for], [matMenuTriggerFor]");
  }

  showDownloadManager() {
    return this.download.Downloads.size > 0;
  }
}
