const { defineConfig } = require("cypress");
const faker = require('faker');



module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.signwithjot.com/",
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            role: faker.name.jobTitle(),
            message: faker.lorem.sentence(5),
          };
        }
      });
    }
  }
});
