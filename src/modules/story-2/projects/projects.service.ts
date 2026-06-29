import { Injectable, NotFoundException } from '@nestjs/common';
import { ProjectResponseDto } from './dto';

@Injectable()
export class ProjectsService {
  private projects: ProjectResponseDto[] = [
    { id: '1', name: 'Alpha Project' },
    { id: '2', name: 'Beta Project' },
  ];

  listProjects(): ProjectResponseDto[] {
    return this.projects;
  }

  deleteProject(id: string): void {
    const index = this.projects.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    this.projects.splice(index, 1);
  }
}
