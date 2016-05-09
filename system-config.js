/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    '@angular2-material': 'vendor/@angular2-material',
    'firebase': 'vendor/firebase/lib/firebase-web.js',
    'angularfire2': 'vendor/angularfire2'
};
var materialPackages = [
    'core',
    'toolbar',
    'icon',
    'button',
    'sidenav',
    'list',
    'card',
    'input',
    'radio',
    'checkbox'
];
/** User packages configuration. */
var packages = createCustomConfig(materialPackages);
function createCustomConfig(packages) {
    return packages.reduce(function (packageConfig, packageName) {
        packageConfig[("@angular2-material/" + packageName)] = {
            format: 'cjs',
            defaultExtension: 'js',
            main: packageName
        };
        return packageConfig;
    }, {
        angularfire2: {
            defaultExtension: 'js',
            main: 'angularfire2.js'
        }
    });
}
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map