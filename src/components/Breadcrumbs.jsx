import { Link } from "react-router-dom";

export function Breadcrumbs({ items }) {
  return (
    <nav className="text-sm text-[#A1A1AA]" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {last ? (
                <span className="text-[#D4D4D8]">{item.name}</span>
              ) : (
                <Link to={item.path} className="hover:text-white">
                  {item.name}
                </Link>
              )}
              {last ? null : <span aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
