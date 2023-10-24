import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export default function Pagination() {
  return (
    <div className="flex items-center justify-between w-full px-8 h-14 bg-slate-100">
      <MdKeyboardArrowLeft className="w-6 h-6 cursor-pointer hover:text-blue-300" />
      <input
        type="button"
        value="1"
        className="font-bold text-blue-500 cursor-pointer"
      />
      <div className="cursor-pointer hover:text-blue-300">2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <MdKeyboardArrowRight className="w-6 h-6" />
    </div>
  );
}
