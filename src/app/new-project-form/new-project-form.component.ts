import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.scss'],
  providers: [ProjectService]
})
export class NewProjectFormComponent {
  categoryChoice: string ="Technology";
  constructor(private projectService: ProjectService) { }


  submitForm(title: string, description: string, organizers: string, goal: number,perks: string) {
    console.log(this.categoryChoice);
    var newProject: Project = new Project(title, description, organizers, goal, this.categoryChoice, perks);

    this.projectService.addProject(newProject);
  }
}
