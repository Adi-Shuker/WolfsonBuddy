// This can be a function or an object literal.
module.exports = function() {
    return {
        flywayArgs: {
            url: 'jdbc:mysql://localhost:3306',
            schemas: 'wolfson_buddy',
            locations: 'conf/sql',
            user: 'root',
            password: 'abc',
            sqlMigrationSuffixes: '.sql',
            baselineOnMigrate: false,
            // baselineVersion: '0.0'
        }
    }
};