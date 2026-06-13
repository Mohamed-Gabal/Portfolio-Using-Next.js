import Image from "next/image";
import { BlogPost } from "@/types";
import Badge from "@/components/ui/Badge";

const BlogCard = ({ image, title, date, tags }: BlogPost) => {
  return (
    <article>
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="object-cover rounded-lg"
      />
      <p className="mt-4 text-gray-500 font-medium text-base sm:text-lg">
        {date}
      </p>
      <h3 className="mt-5 text-lg sm:text-xl font-bold text-white hover:underline hover:text-cyan-300 cursor-pointer transition-all duration-300">
        {title}
      </h3>
      <div className="mt-4 flex gap-2 items-center flex-wrap">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </article>
  );
};
export default BlogCard;