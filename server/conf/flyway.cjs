// This can be a function or an object literal.
module.exports = function() {
    return {
        flywayArgs: {
            url: 'jdbc:mysql://localhost:3306',
            schemas: 'sql_hello_world1',
            locations: 'conf/sql',
            user: 'root',
            password: '123456',
            sqlMigrationSuffixes: '.sql',
            baselineOnMigrate: false,
            // baselineVersion: '0.0'
        }
    }
};