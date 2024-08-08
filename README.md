<img src="https://raw.githubusercontent.com/oslabs-beta/flake-guard/98d4d159ba19a2e6dad3be218258100495a82826/flake-guard-app/src/client/assets/logo.png" style="background-color: white; width: 40% ; height: 20%"/>

# 🚀 Welcome to flake guard! 
### [Website](https://flake-guard.com/) [Npm*](https://flake-guard.com/) [Articles*](https://flake-guard.com/)
<div>
<img src="https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=webp&w=512" style="width: 40px"/>
<img src="https://cdn.iconscout.com/icon/free/png-512/free-typescript-1174965.png?f=webp&w=512" style="width: 40px"/> 
<img src="https://cdn.iconscout.com/icon/free/png-512/free-react-1-282599.png?f=webp&w=512" style="width: 40px"/> 
<img src ="https://cdn.iconscout.com/icon/free/png-512/free-tailwind-css-5285308-4406745.png?f=webp&w=512" style="width: 40px"/>
<img src="https://cdn.iconscout.com/icon/free/png-512/free-jest-3521517-2945020.png?f=webp&w=512" style="width: 40px"/>
<img src="https://cdn.iconscout.com/icon/free/png-512/free-npm-3521612-2945056.png?f=webp&w=512" style="width: 40px"/>

</div>

### Flake-Guard is a free, open-source tool that allows developers to run Jest tests to automatically detect, report, and manage flaky tests in software development.
---
*flaky test
: a test that sometimes passes and sometimes fails for the same code, often due to nondeterministic factors like timing issues, network variability, or reliance on external systems.*

**By identifying and handling these inconsistent tests, Flake-Guard helps maintain test reliability.**

# DEMO SECTION WITH VIDEO

### end of demo section 
---
# Getting Started
Installation:
```npm i flake-guard```

Installation as dev dependency:
```npm i flake-guard --save-dev```

To run FlakeGuard, simply execute the command
```npx flake-guard <filename> ```
. *change `<filename>` to the name of the test file that you want to examine. 

👁️FlakeGuard will analyze your E2E tests for flakiness by executing multiple test runs and analyzing the results. _The default number of test runs is 10_, but this can be adjusted as described below.

In general, there is a time versus accuracy tradeoff. More test executions increase accuracy but reduce speed.

## Configuration:
To adjust FlakeGuard configuration variables, you can create a file in the root directory of your project called
fg.config.json
. Below are the defaults, which can be overridden in your local 'fg.config.json' file.

# [Flake-guard.com](https://Flake-guard.com)
## Tracked Dashboard Metrics
<div>
<img src="flake-guard-app/src/client/assets/graphs.png" style="height: 20%; ">
</div> 

## Contribution Guidelines
---
# Authors 
| Name (First, Last) | Connect with us  | 
| ------------- |:-------------:|
| Ashley Hannigan | [LinkedIn](https://www.linkedin.com/in/ashley-hannigan-88-/) `,` [Github](https://github.com/ashhannigan)
| Brendan Xiong | [LinkedIn](https://www.linkedin.com/in/brendanxiong/) `,` [Github](https://github.com/brendanxiong)
| Tommy Martinez | [LinkedIn](https://www.linkedin.com/in/tommy-martinez/) `,` [Github](https://github.com/tmm150)
| Paloma Reynolds | [LinkedIn](https://www.linkedin.com/in/palomareynolds/)`,` [Github](https://github.com/palomareynolds)
| Will Suto | [LinkedIn](https://www.linkedin.com/in/willsuto/) `,` [Github](https://github.com/willsuto)

