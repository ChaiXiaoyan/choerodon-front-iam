# Choerodon-front-iam 

The project is an overall front-end project that combines Choerodon Boot and Choerodon iam. The infrastructure Choerodon-front-iam module in the Choerodon front can be added selectively. The construction project can be used on `macOS`, `Windows` or `Linux`. Teams can be developed in modules, greatly speeding up development.

 * The project uses `webpack` for construction.
 * Use `gulp` to manage related processes.
 * Use `yeoman` to automatically generate related modules for the project.
 * `React` and `Mobx` are used as the main development technology.

The basic module has 3 levels, which have the following functions:

 * Project layout:
    * Project Settings
    * Role assignment function at the project level
 * Organization layout:
    * Project Management
    * User Management
    * Client Management
    * LDAP settings
    * Password Policy Management
    * Role Assignments function at organization level
    * Mail Template at organization level
    * Inmail Template at organization level
    * Send Setting at organization level
    * Message Record at organization level
 * Global layout:
    * User Info
    * Change Password
    * Project Info
    * Organization Info
    * Organization Management
    * Role Management
    * Role Assignments
    * Root User Setting
    * Menu Management
    * Microservice
    * Instance Management
    * Config Management
    * Route Management
    * Role Assignments function at global level
    * Mail Template at global level
    * Saga Instance
    * Saga Define
    * Role Tag
    * Mailbox Setting
    * API Test
    * Dashboard Setting
    * Send Setting at global level
    * Message Record at global level
    * Inmail Template at global level
    * Task Detail
    * Execution Record
    * Executable Program

## Development build

The development is modeled on the i'm project structure (it is recommended that the directory structure is automatically generated by the yo command, saving the time for automatic directory creation). The source file directory is in `iam/src/app/iam`. The main directory structure is as follows:


    ├── src
    │   └── app
    │       └── iam
    │           ├── assets
    │           │   ├── css
    │           │   └── images
    │           ├── components
    │           │   ├── loadingBar
    │           │   └── memberRole
    │           ├── config
    │           │   ├── Menu.yml
    │           │   └── language
    │           ├── containers
    │           │   ├── global
    │           │   ├── organization
    │           │   ├── project
    │           │   ├── user
    │           │   └── IAMIndex.js
    │           ├── locale
    │           │   ├── en_US.js
    │           │   └── zh_CN.js
    │           ├── stores
    │           │   ├── globalStores
    │           │   ├── organization
    │           │   ├── project
    │           │   └── user
    │           └── test
    │               └── util
    ├── .eslintrc.json
    ├── .gitignore
    ├── .stylelintrc.json    
    ├── package.json 
    └── tsconfig.json
     


* The `css` stores module of Assets store general stylesheet, the images storage module store image resources
* The `containers` stores the front page
* The `stores` stores the data needed for the front page
* The `common` stores public configuration files
* The `components` stores public components
* The `locale` stores module multilingual files
* The `config` stores `Menu.yml` configuration file (including code and icon of  menu, jump into Route, menu permissions) and language in Chinese and English yml (`zh.yml`, `en.yml`)
* The `test` stores test files

## Dependencies

* Node environment (6.9.0+)
* Git environment
* Python environment(2.7)

## Run via NodeJS

```
$ git clone  https://github.com/choerodon/choerodon-front-iam.git
$ cd ./choerodon-front-iam/iam
$ npm install
$ npm start
```

Once running, open http://localhost:9090

## Related documents and information

* [React](https://reactjs.org)
* [Mobx](https://github.com/mobxjs/mobx)
* [webpack](https://webpack.docschina.org)
* [gulp](https://gulpjs.com)

## Links

* [Change Log](./CHANGELOG.zh-CN.md)

## Reporting Issues
If you find any shortcomings or bugs, please describe them in the  [issue](https://github.com/choerodon/choerodon/issues/new?template=issue_template.md).

## How to Contribute
Pull requests are welcome! [Follow](https://github.com/choerodon/choerodon/blob/master/CONTRIBUTING.md) to know for more information on how to contribute.
