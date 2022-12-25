import {Component, OnInit} from "@angular/core";
import {Customer, CustomersFacade, Project} from "@workshop/core-data";
import {Observable} from "rxjs";
import {ProjectsFacade} from "../../../../../libs/core-data/src/lib/state/projects/projects.facade";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  customers$: Observable<Customer[]> = this.customersFacade.allCustomers$;
  projects$: Observable<Project[]> = this.projectsFacade.allProjects$;
  currentProject$: Observable<Project> = this.projectsFacade.currentProject$;

  constructor(
    private projectsFacade: ProjectsFacade,
    private customersFacade: CustomersFacade
  ) { }

  ngOnInit() {
    this.customersFacade.loadCustomers();
    this.projectsFacade.loadAll();
    this.projectsFacade.mutations$.subscribe(_ => this.resetCurrentProject());
    this.resetCurrentProject();
  }

  resetCurrentProject() {
    this.selectProject({id: null});
  }

  selectProject(project) {
    this.projectsFacade.selectProject(project.id);
  }

  saveProject(project) {
    if (!project.id) {
      this.projectsFacade.createProject(project);
    } else {
      this.projectsFacade.updateProject(project);
    }
  }

  deleteProject(project) {
    this.projectsFacade.deleteProject(project);
  }

}
