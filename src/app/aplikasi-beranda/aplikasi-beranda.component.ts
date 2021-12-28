import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../models/aplikasi';
import { AplikasiService } from '../services/aplikasi.service';


@Component({
  selector: 'app-aplikasi-beranda',
  templateUrl: './aplikasi-beranda.component.html',
  styleUrls: ['./aplikasi-beranda.component.scss']
})
export class AplikasiBerandaComponent implements OnInit {

  dataSource: User[];
  searchText:any;

  constructor(
    public dialog:MatDialog,
    private aplikasiservice: AplikasiService,
    public api:AplikasiService,
  ) { 
    this.dataSource = [];
  }

  ngOnInit(): void {
    this.getUser2();
  }

  getUser2() {
    this.api.getDataUser().subscribe(User => {

        this.dataSource = User.data;
       
    });
  }
  

}
