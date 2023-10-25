@Library('jenkins-library')

def jobParams  = [
    booleanParam(defaultValue: false, name: 'fullClean'),
    booleanParam(defaultValue: true, name: 'deploy'),
    booleanParam(defaultValue: false, name: 'restart'),
    booleanParam(defaultValue: false, name: 'hardReset'),
    booleanParam(defaultValue: false, name: 'dbincrease'),
    stringParam(defaultValue: '50', name: 'pgsqlDiskSize'), // at 50G for the first time, you can increase the disk
    booleanParam(defaultValue: false, name: 'dbmigrate')
]

def pipeline = new org.subqd.AppPipeline(
    steps: this,
    jobParams: jobParams
)
pipeline.runPipeline()
