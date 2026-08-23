export interface Testimonial {
  id: string;
  customerName: string;
  location: string;
  rating: number;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    customerName: 'Rafiq H.',
    location: 'Dhaka',
    rating: 5,
    quote: 'Fit and fabric are consistently better than what I expected for the price. My go-to for basics now.',
  },
  {
    id: 'rev-2',
    customerName: 'Nabila S.',
    location: 'Chattogram',
    rating: 5,
    quote: 'Delivery was quick and the packaging felt premium. The kurti colors matched the photos exactly.',
  },
  {
    id: 'rev-3',
    customerName: 'Tanvir A.',
    location: 'Sylhet',
    rating: 4,
    quote: 'Great quality overall. Sizing runs slightly relaxed so I would size down for a slimmer fit.',
  },
  {
    id: 'rev-4',
    customerName: 'Farzana K.',
    location: 'Dhaka',
    rating: 5,
    quote: 'Customer support helped me exchange a size within a day. Will keep shopping here.',
  },
];
