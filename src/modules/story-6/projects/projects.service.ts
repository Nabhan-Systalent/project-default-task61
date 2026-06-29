import { Injectable } from '@nestjs/common';

export interface Project {
  id: string;
  name: string;
}

@Injectable()
export class ProjectsService {
  private projects: Project[] = [
    { id: '1', name: 'Alpha Project' },
    { id: '2', name: 'Beta Project' },
  ];

  findAll(): Project[] {
    return this.projects;
  }

  delete(id: string): void {
    this.projects = this.projects.filter((p) => p.id !== id);
  }
}
