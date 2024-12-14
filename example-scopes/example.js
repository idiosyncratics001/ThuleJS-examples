import scopes from 'thulejs-scopes';

const scopesOptions ={
    path: '',
    dir: '',
    preload: true
}
//new scopes(scopesOptions);
new scopes();

//<i> use of scopes:
// get the scope or entire scopes

console.log(scopes.getMeta())                               // Get version etc.
console.log(scopes.getMeta('std'))                          // Get meta of first found scope in the structure
console.log(scopes.getMeta('customScript', 'xml'))          // Get meta in <parent> from <scope> 

const _scopes   = scopes.getScopes()                        // by default preload is disabled, a warning is returned
const _std      = scopes.getScopes('std')                   // get the first found scope in the structure, will pull from file if missing (new object)
const _std2     = scopes.getScopes('std', 'utils')          // get these two scopes, first found

const findall   = scopes.findScopes()                       // must have scopename, returns a warning
const xml       = scopes.findScopes('xml')                  // get the first found scope in the structure
const xml2      = scopes.findScopes('utils', 'xml')         // if a double name exists in the scope find it by, from <parent> get <scopename>

//<i> rebuild scopes:
//rebuild the scope or entire scopes
scopes.buildScopes()                                // must have scopename, a warning is returned
scopes.buildScopes('std')                           // rebuild first found scope from file, if preload is disabled the scope will be cached
scopes.buildScopes('customScript', 'xml')           // rebuild scope from file, specify from <parent> get <scopename>