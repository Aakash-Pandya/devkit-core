/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
 */
// tslint:disable:no-any non-null-operator no-big-function no-non-null-assertion no-implicit-dependencies

/**
 * Hi-Level designs for Workspaces, of which they must adhere to
 */
export { AmbiguousProjectPathException, ProjectNotFoundException, ProjectToolNotFoundException, Workspace, WorkspaceFileNotFoundException, WorkspaceNotYetLoadedException, WorkspaceProject, WorkspaceProjectI18n, WorkspaceSchema, WorkspaceTool, WorkspaceToolNotFoundException } from './workspace';

/**
 * Custom ProjectType interface for workspace schema
 */
export { IProjectTypes } from './project';
