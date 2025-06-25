type Props = {
  title: string;
  items: string[];
  type?: "disc" | "decimal" | "tag";
};

export default function ProjectDetailInfoSection({
  title,
  items,
  type = "disc",
}: Props) {
  if (!Array.isArray(items) || items.length === 0) return null;

  let listClass = "";
  let itemClass = "";

  switch (type) {
    case "decimal":
      listClass =
        "list-decimal pl-5 space-y-2 text-lg text-gray-800 leading-relaxed";
      break;
    case "tag":
      listClass = "flex flex-wrap gap-3 text-sm text-gray-700";
      itemClass = "bg-gray-200 px-3 py-1 rounded-md";
      break;
    default:
      listClass =
        "list-disc pl-5 space-y-2 text-lg text-gray-800 leading-relaxed";
  }

  return (
    <section className="border-b border-gray-300 pb-4">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <ul className={listClass}>
        {items.map((item, i) => (
          <li key={i} className={itemClass}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
