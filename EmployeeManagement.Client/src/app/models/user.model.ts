export interface User {
    id: number;
    role: string;
    name: string;
    email: string;
    phoneNumber: string;
    password?: string;
    address?: string;
    subSectionId: number;
  }
  