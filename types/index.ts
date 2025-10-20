export type Course = 'Starter' | 'Main' | 'Dessert' | 'Drinks' | 'Sides';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  course: Course;
  price: string;
  imageUri?: string;

}
