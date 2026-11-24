/* Customer testimonials: the homepage slider and the markdown pages. */

export type Testimonial = {
  id: string;
  person: string;
  role: string;
  company: string;
  attribution?: string;
  photo: string;
  focus?: string;
  logo?: string;
  metrics?: readonly string[];
  quote: string;
};
