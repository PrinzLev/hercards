import { atom } from 'jotai';
import { ICategory } from './category';

export interface IQuestion {
  categories: ICategory[];
  question: string;
  _id: string;
}

export const questionGenerated = atom({
  categories: [{ name: '', _id: '' }],
  question: '',
  _id: '',
});
