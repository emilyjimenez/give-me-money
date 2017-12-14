import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {
@Input() selectedProject;

  editCategoryChoice: string = "Technology";
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  beginUpdatingProject(projectToUpdate) {
    this.projectService.updateProject(projectToUpdate);
  }

  beginDeletingProject(projectToDelete) {
    if(confirm("Are you sure your want to delete this project?")) {
      this.projectService.deleteProject(projectToDelete);
    }
  }
}
