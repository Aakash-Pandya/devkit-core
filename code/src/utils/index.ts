/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
 */
// tslint:disable:no-any non-null-operator no-big-function no-non-null-assertion no-implicit-dependencies

import * as tags from './literals';
import * as strings from './strings';

export * from './array';
export * from './lang';
export * from './object';
export * from './partially-ordered-set';
export * from './priority-queue';
export * from './template';

export { tags, strings };

export type DeepReadonly<T> = T extends ( infer R )[] ? DeepReadonlyArray<R> : T extends Function ? T : T extends object ? DeepReadonlyObject<T> : T;

// This should be ReadonlyArray but it has implications.
export interface DeepReadonlyArray<T> extends Array<DeepReadonly<T>> {}

export type DeepReadonlyObject<T> = {
    readonly [ P in keyof T ]: DeepReadonly<T[ P ]>;
};

export type Readwrite<T> = {
    -readonly [ P in keyof T ]: T[ P ];
};
