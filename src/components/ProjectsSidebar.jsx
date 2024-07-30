import Button from "./Button";

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelect,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((p) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm text-stone-400 hover:text-stone-200 hover:bg-stone-800";

          if (p.id === selectedProjectId)
            cssClasses += " text-stone-200 bg-stone-800";
          else cssClasses += " text-stone-400";

          return (
            <li key={p.id}>
              <button onClick={() => onSelect(p.id)} className={cssClasses}>
                {p.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
