import { Component, OnInit } from "@angular/core";
import { DownloadService } from "../download.service";
import { Download } from "../models/download";
import { NgIf, NgFor } from "@angular/common";

@Component({
    selector: "app-download-manager",
    templateUrl: "./download-manager.component.html",
    styleUrl: "./download-manager.component.css",
    standalone: true,
    imports: [NgIf, NgFor],
})
export class DownloadManagerComponent implements OnInit {
  isMinimized: boolean = false;
  constructor(public downloadService: DownloadService) {}

  ngOnInit(): void {}

  getDownloads() {
    return Array.from(this.downloadService.Downloads.values());
  }

  toggleMinimize() {
    this.isMinimized = !this.isMinimized;
  }

  async cancelDownload(downloadId: string) {
    await this.downloadService.abortDownload(downloadId);
  }
}
