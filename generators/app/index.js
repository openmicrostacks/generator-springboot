'use strict';

const BaseGenerator = require('../base-generator');

module.exports = class extends BaseGenerator {

    prompting() {

        const prompts = [
            {
                type: 'list',
                name: 'appType',
                message: 'Which type of application you want to generate?',
                choices: [
                    {
                        value: 'microservice',
                        name: 'Microservie'
                    },
                    {
                        value: 'config-server',
                        name: 'Spring Cloud Config Server'
                    },
                    {
                        value: 'service-registry',
                        name: 'Spring Cloud Eureka Server for Service Registry and Discovery'
                    }
                ],
                default: 'microservice'
            }

        ];

        return this.prompt(prompts).then(answers => {
            this.appType = answers.appType;
        });
    }

    default() {
        if(this.appType === 'microservice') {
            this.composeWith(require.resolve('../microservice'));
        } else if(this.appType === 'config-server') {
            this.composeWith(require.resolve('../config-server'));
        } else if(this.appType === 'service-registry') {
            this.composeWith(require.resolve('../service-registry'));
        }
    }

};