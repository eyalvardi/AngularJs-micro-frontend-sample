const path = require("path");
const util = require("util");

const {buildAppConfig} = require("./webpack/projects");
const {buildServerAppConfig} = require("./webpack/projects");

module.exports = (env, webpackArgs) => {
    return require('./webpack/cli').then(args => {
        const {
            isUiVisualizer,
            uiRouterTrace,
            buildVersion,
            projects
        } = args;
        const projectsConfigs = [];
        const baseProjectsPath =  path.resolve(__dirname, `./dist/apollo/${buildVersion}`);
        projects.forEach( projectName => {
            projectsConfigs.push(
                buildAppConfig( projectName, isUiVisualizer, uiRouterTrace, buildVersion )
            );
        });

        // Update Dev Server
        projectsConfigs.push(buildServerAppConfig(baseProjectsPath,buildVersion));

        console.log(util.inspect(webpackArgs, false,5,true));

        return projectsConfigs;
    })
}
