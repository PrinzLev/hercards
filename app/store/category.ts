import { atom, type PrimitiveAtom } from 'jotai';

export interface ICategory {
  name: string;
  _id: string;
}

export const categorySelected = atom({ name: '', _id: '' });
