import { Injectable } from '@angular/core';
import { FreezerItem } from '../models/freezer-item';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FreezerItemService {
  private readonly STORAGE_KEY = 'freezer_items';
  private itemsSubject = new BehaviorSubject<FreezerItem[]>([]);
  items$: Observable<FreezerItem[]> = this.itemsSubject.asObservable();

  constructor() {
    this.loadItems();
  }

  private loadItems(): void {
    const storedItems = localStorage.getItem(this.STORAGE_KEY);
    if (storedItems) {
      const items: FreezerItem[] = JSON.parse(storedItems);
      // Convert string dates back to Date objects
      const itemsWithDates = items.map(item => ({
        ...item,
        dateAdded: new Date(item.dateAdded)
      }));
      this.itemsSubject.next(itemsWithDates);
    } else {
      this.itemsSubject.next([]);
    }
  }

  private saveItems(items: FreezerItem[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
    this.itemsSubject.next([...items]);
  }

  getAll(): Observable<FreezerItem[]> {
    return this.items$;
  }

  getById(id: string): FreezerItem | undefined {
    return this.itemsSubject.value.find(item => item.id === id);
  }

  add(item: Omit<FreezerItem, 'id' | 'dateAdded'>): void {
    const newItem: FreezerItem = {
      ...item,
      id: this.generateId(),
      dateAdded: new Date()
    };

    const currentItems = this.itemsSubject.value;
    this.saveItems([...currentItems, newItem]);
  }

  update(updatedItem: FreezerItem): void {
    const currentItems = this.itemsSubject.value;
    const index = currentItems.findIndex(item => item.id === updatedItem.id);

    if (index !== -1) {
      const newItems = [...currentItems];
      newItems[index] = updatedItem;
      this.saveItems(newItems);
    }
  }

  updateAmount(id: string, amount: number): void {
    const currentItems = this.itemsSubject.value;
    const index = currentItems.findIndex(item => item.id === id);

    if (index !== -1) {
      const newItems = [...currentItems];
      newItems[index] = {
        ...newItems[index],
        amount: Math.max(0, amount) // Prevent negative amounts
      };
      this.saveItems(newItems);
    }
  }

  delete(id: string): void {
    const currentItems = this.itemsSubject.value;
    const filteredItems = currentItems.filter(item => item.id !== id);
    this.saveItems(filteredItems);
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
}
