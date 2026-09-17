
type TagItem = {
  id: string;
  text: string;
  bgColor: string;
  textColor: string;
}

type ProjectCtaProps = {
  title: string;
  tags: TagItem[];
}

const ProjectCta = ({ title, tags }: ProjectCtaProps) => {
  return (
    <div>
      <h3 className="text-center m-10 text-base">{title}</h3>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {tags.map((item) => (
          <span
            key={item.id}
            style={{ backgroundColor: item.bgColor, color: item.textColor, border: "1px solid currentColor" }}
            className="px-4 py-2 rounded-full text-sm font-medium"
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCta;
