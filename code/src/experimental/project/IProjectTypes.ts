/**
 * Interface to enforce available Workspace Project Types
 *
 * @export
 * @interface IProjectTypes
 */
export interface IProjectTypes {
    /**
     * Contains the root path where Angular Applications are generated
     *
     * @type {string}
     * @memberof IProjectTypes
     */
    applicationsRoot: string;

    /**
     * Contains the root path where Angular NPM/Yarn Packages are generated
     *
     * @type {string}
     * @memberof IProjectTypes
     */
    packagesRoot: string;

    /**
     * Contains the root path where Schematics, single or collections, are generated
     *
     * @type {string}
     * @memberof IProjectTypes
     */
    schematicsRoot: string;
}
