import { Injectable } from '@nestjs/common';
import { ProjectResponseDto } from './dto';

@Injectable()
export class ProjectsService {
  private projects: ProjectResponseDto[] = [
    { id: '1', name: 'Internal S3 Integration' }
  ];

  listProjects(): ProjectResponseDto[] {
    return this.projects;
  }

  deleteProject(id: string): void {
    this.projects = this.projects.filter((p) => p.id !== id);
  }
}
