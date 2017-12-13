import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.scss'],
  providers: [ProjectService]
})
export class NewProjectFormComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }
  submitForm(title: string, description: string, organizers: string, goal: number, category: string, perks: string) {
    var newProject: Project = new Project(title, description, organizers, goal, category, perks);
    this.projectService.addProject(newProject);
  }
}
