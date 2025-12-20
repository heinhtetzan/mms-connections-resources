export interface Product {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  features: string[];
  price: string;
  image: string;
  category: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}
