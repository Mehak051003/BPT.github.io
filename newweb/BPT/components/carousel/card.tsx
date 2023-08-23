import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  imgSrc: string;
  content: string;
  adrs: string;

};

const Card = (props: Props) => {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-sm max-w-sm mb-5 ">
        <a href="#">
            <img className="rounded-t-lg" src={props.imgSrc} alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="text-gray-900 font-bold text-xl tracking-tight mb-2">{props.title}</h5>
            </a>
            <p className="font-normal text-gray-700 mb-3">{props.content}</p>
            
        </div>
    </div>
  );
};
export default Card;
