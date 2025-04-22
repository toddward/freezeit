import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FreezerItemService } from '../../services/freezer-item.service';

@Component({
  selector: 'app-add-freezer-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-freezer-item.component.html',
  styleUrl: './add-freezer-item.component.scss'
})
export class AddFreezerItemComponent {
  name: string = '';
  amount: number = 1;
  amountUnit: string = 'pieces';
  imageUrl: string = '';
  imagePreview: string | null = null;

  amountUnits: string[] = ['pieces', 'lbs', 'oz', 'kg', 'g', 'packages'];

  constructor(
    private freezerItemService: FreezerItemService,
    private router: Router
  ) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      // Create a preview of the image
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);

      // In a real app, you would upload the file to a server
      // For this demo, we'll just use the data URL as the image URL
      this.convertFileToBase64(file).then(base64 => {
        this.imageUrl = base64;
      });
    }
  }

  convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  }

  onSubmit(): void {
    if (this.name && this.amount > 0) {
      this.freezerItemService.add({
        name: this.name,
        amount: this.amount,
        amountUnit: this.amountUnit,
        imageUrl: this.imageUrl || ''
      });

      this.router.navigate(['/contents']);
    }
  }
}
