/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
 */
// tslint:disable:no-any non-null-operator no-big-function no-non-null-assertion no-implicit-dependencies


export function clean<T>(array: Array<T | undefined>): Array<T> {
  return array.filter(x => x !== undefined) as Array<T>;
}
