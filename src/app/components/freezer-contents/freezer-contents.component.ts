import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FreezerItemService } from '../../services/freezer-item.service';
import { FreezerItem } from '../../models/freezer-item';

@Component({
  selector: 'app-freezer-contents',
  imports: [CommonModule, RouterLink],
  templateUrl: './freezer-contents.component.html',
  styleUrl: './freezer-contents.component.scss'
})
export class FreezerContentsComponent implements OnInit {
  freezerItems: FreezerItem[] = [];

  constructor(private freezerItemService: FreezerItemService) {}

  ngOnInit(): void {
    this.loadFreezerItems();
  }

  loadFreezerItems(): void {
    this.freezerItemService.getAll().subscribe(items => {
      this.freezerItems = items;
    });
  }

  deleteItem(id: string): void {
    this.freezerItemService.delete(id);
  }

  incrementAmount(id: string, currentAmount: number): void {
    this.freezerItemService.updateAmount(id, currentAmount + 1);
  }

  decrementAmount(id: string, currentAmount: number): void {
    this.freezerItemService.updateAmount(id, currentAmount - 1);
  }
}
