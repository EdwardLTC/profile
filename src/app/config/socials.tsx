import { Github, Linkedin, Mail } from 'lucide-react';
import { Social } from '../types/types';

export const socials: Social[] = [
  {
    name: 'GitHub',
    icon: <Github size={20} />,
    url: 'https://github.com/EdwardLTC',
    color: '#6e7681',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={20} />,
    url: 'https://www.linkedin.com/in/edwardltc',
    color: '#0077B5',
  },
  {
    name: 'Email',
    icon: <Mail size={20} />,
    url: 'mailto:lethanhcong06062003@gmail.com',
    color: '#D44638',
  },
  // {
  //   name: 'Facebook',
  //   icon: <Facebook  size={20}/>,
  //   url: 'https://www.facebook.com/Edward2k3',
  //   color: '#1877F2',
  // }
];
