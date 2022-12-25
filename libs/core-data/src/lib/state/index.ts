import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCustomers from './customers/customers.reducer';
import * as fromProjects from './projects/projects.reducer';

export interface AppState {
  customers: fromCustomers.CustomersState;
  projects: fromProjects.ProjectsState;
}

export const reducers: ActionReducerMap<AppState> = {
  customers: fromCustomers.customersReducer,
  projects: fromProjects.projectsReducer
};

// -------------------------------------------------------------------
// CUSTOMERS SELECTORS
// -------------------------------------------------------------------
export const selectCustomersState = createFeatureSelector<fromCustomers.CustomersState>('customers');

export const selectAllCustomers = createSelector(
  selectCustomersState,
  fromCustomers.selectAllCustomers,
);

// -------------------------------------------------------------------
// PROJECTS SELECTORS
// -------------------------------------------------------------------
export const selectProjectsState = createFeatureSelector<fromProjects.ProjectsState>('projects');

export const selectProjectIds = createSelector(
  selectProjectsState,
  fromProjects.selectProjectIds
)

export const selectProjectEntities = createSelector(
  selectProjectsState,
  fromProjects.selectProjectEntities
)

export const selectAllProjects = createSelector(
  selectProjectsState,
  fromProjects.selectAllProjects
)
export const selectCurrentProjectId = createSelector(
  selectProjectsState,
  fromProjects.getSelectedProjectId
);

const  emptyProject={
  id : null,
  title: '',
  details: '',
  percentComplete: 0,
  approved: false,
  customerId: null
}
export const selectCurrentProject = createSelector(
  selectProjectEntities,
  selectCurrentProjectId,
  (projectEntities, projectId) => {
    return projectId ? projectEntities[projectId] : emptyProject;
  }
);
