import { Component, OnInit } from '@angular/core';
import { SocksService } from '../socks/socks.service';
import { Observable } from 'rxjs';
import { Sock } from '../socks/sock.model';
import { AsyncPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PricePipe } from '../pipes/price.pipe';

@Component({
  selector: 'app-latest-socks',
  standalone: true,
  imports: [NgFor, AsyncPipe, RouterLink, PricePipe],
  templateUrl: './latest-socks.component.html'
})
export class LatestSocksComponent implements OnInit {
  socks$!: Observable<Sock[]>;

  constructor(private socksService: SocksService) { }

  ngOnInit(): void {
    this.socks$ = this.socksService.getLatest();
  }
}
