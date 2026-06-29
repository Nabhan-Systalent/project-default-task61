import { ProjectListProps } from './ProjectManager.types';

export const ProjectManager = ({ projects, isLoading, error, onCreateProject }: ProjectListProps) => {
  if (isLoading) {
    return (
      <div className="p-6 space-y-4">
        <div className="h-8 w-48 bg-gray-200 animate-pulse rounded" />
        <div className="h-64 w-full bg-gray-100 animate-pulse rounded" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-600">
        <p>Error loading projects: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
        <button
          onClick={onCreateProject}
          className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
        >
          Create Project
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-300">
          <p className="text-gray-500">No projects found. Create one to get started.</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="p-5 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h2 className="font-semibold text-lg text-gray-900">{project.name}</h2>
              <p className="text-gray-500 text-sm mt-1 mb-4">{project.description}</p>
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span>{project.memberCount} members</span>
                <span>Updated {project.lastUpdated}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
