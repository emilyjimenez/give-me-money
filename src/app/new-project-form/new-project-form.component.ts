import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';


@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.scss'],
  providers: [ProjectService]
})
export class NewProjectFormComponent {
  // This is a work around since we were having troubles getting the value for category to properly select. We created a default dummy value object in new-project-form.ts for Technology that can change when you select another category
  categoryChoice: string ="Technology";
  constructor(private projectService: ProjectService) { }

  submitForm(title: string, description: string, organizers: string, goal: number,perks: string) {
    var newProject: Project = new Project(title, description, organizers, goal, this.categoryChoice, perks);
    this.projectService.addProject(newProject);
  }
}
