import { Project } from '@workshop/core-data';
import { Action } from '@ngrx/store';

export enum ProjectsActionTypes {
  ProjectSelected = '[Projects] Selected',
  LoadProjects = '[Projects] Load Data',
  ProjectsLoaded = '[Projects] Data Loaded',
  AddProject = '[Projects] Add Data',
  ProjectAdded = '[Projects] Data Added',
  UpdateProject = '[Projects] Update Data',
  ProjectUpdated = '[Projects] Data Updated',
  DeleteProject = '[Projects] Delete Data',
  ProjectDeleted = '[Projects] Delete Data'
}

export class SelectProject implements Action {
  readonly type = ProjectsActionTypes.ProjectSelected;
  constructor(public payload) { }
}

export class LoadProjects implements Action {
  readonly type = ProjectsActionTypes.LoadProjects;
}

export class ProjectsLoaded implements Action {
  readonly type = ProjectsActionTypes.ProjectsLoaded;
  constructor(public payload: Project[]) { }
}

export class AddProject implements Action {
  readonly type = ProjectsActionTypes.AddProject;
  constructor(public payload: Project) { }
}

export class ProjectAdded implements Action {
  readonly type = ProjectsActionTypes.ProjectAdded;
  constructor(public payload: Project) { }
}

export class UpdateProject implements Action {
  readonly type = ProjectsActionTypes.UpdateProject;
  constructor(public payload: Project) { }
}

export class ProjectUpdated implements Action {
  readonly type = ProjectsActionTypes.ProjectUpdated;
  constructor(public payload: Project) { }
}

export class DeleteProject implements Action {
  readonly type = ProjectsActionTypes.DeleteProject;
  constructor(public payload: Project) { }
}

export class ProjectDeleted implements Action {
  readonly type = ProjectsActionTypes.ProjectDeleted;
  constructor(public payload: Project) { }
}

export type ProjectsActions = SelectProject
  | LoadProjects
  | ProjectsLoaded
  | AddProject
  | ProjectAdded
  | UpdateProject
  | ProjectUpdated
  | DeleteProject
  | ProjectDeleted
  ;
