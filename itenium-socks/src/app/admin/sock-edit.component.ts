import { Component } from '@angular/core';
import { SocksService } from '../socks/socks.service';
import { Observable } from 'rxjs';
import { Sock } from '../socks/sock.model';
import { SocksAdminService } from './socks-admin.service';

@Component({
  selector: 'app-sock-edit',
  templateUrl: './sock-edit.component.html',
  styles: ``,
  standalone: false
})
export class SockEditComponent {
  sock$!: Observable<Sock>;

  constructor(
    private socksService: SocksService,
    private socksAdminService: SocksAdminService,
  ) {}

  ngOnInit(): void {
    // TODO: hardocded id "1"??
    this.sock$ = this.socksService.getById(1);
  }
}
