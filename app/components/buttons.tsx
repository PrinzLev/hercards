import { IconRefresh, IconCaretDown } from '@tabler/icons-react';

interface ICategories {
  categories: { name: string }[];
}

export default function Buttons({ categories }: ICategories) {
  return (
    <div className='mt-10 w-full flex flex-col items-center'>
      <div className='rounded-lg w-[15vw] py-3 px-5 flex justify-between items-center border border-black hover:cursor-pointer'>
        <p className='text-xl font-semibold'>Select A Category</p>
        <IconCaretDown size={25} strokeWidth={1.5} color='black' />
      </div>
      <div className='rounded-lg w-[15vw] py-3 px-5 flex justify-between items-center mt-2 bg-[#87D3B3] hover:cursor-pointer'>
        <p className='text-lg font-semibold'>Generate Questions</p>
        <IconRefresh size={25} strokeWidth={1.5} color='black' />
      </div>
    </div>
  );
}
