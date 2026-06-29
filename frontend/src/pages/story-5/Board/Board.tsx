'use client';

import React, { useState } from 'react';
import { BoardProps, Task } from './Board.types';

export const Board: React.FC<BoardProps> = ({ initialTasks }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const columns: { id: Task['status']; label: string }[] = [
    { id: 'todo', label: 'To Do' },
    { id: 'in-progress', label: 'In Progress' },
    { id: 'done', label: 'Done' },
  ];

  return (
    <div className="flex gap-4 p-6 h-full overflow-x-auto bg-[var(--color-bg-secondary)]">
      {columns.map((column) => (
        <div key={column.id} className="flex flex-col w-80 shrink-0">
          <h3 className="text-lg font-semibold mb-4 text-[var(--color-text-primary)]">
            {column.label} ({tasks.filter(t => t.status === column.id).length})
          </h3>
          <div className="space-y-3">
            {tasks
              .filter((task) => task.status === column.id)
              .map((task) => (
                <div
                  key={task.id}
                  className="p-4 bg-[var(--color-bg-primary)] rounded-lg shadow-sm border border-[var(--color-border)] cursor-pointer hover:border-[var(--color-primary)] transition-colors"
                >
                  <h4 className="font-medium text-[var(--color-text-primary)]">{task.title}</h4>
                  <span className="text-xs text-[var(--color-text-secondary)] uppercase">
                    {task.priority}
                  </span>
                </div>
              ))}
            {tasks.filter(t => t.status === column.id).length === 0 && (
              <div className="p-4 border-2 border-dashed border-[var(--color-border)] rounded-lg text-center text-[var(--color-text-secondary)]">
                No tasks
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
