# Springboot and React made easy with PrimeReact

PrimeReact aims to make ReactJS development easy to develop, learn, standardize and more. 

* Helps getting a grip on watching on security vulnerabilities, JavaScript libraries come in many shapes and quality and are hard to control. Having one reliable source alike PrimeReact can solve that problem permanently.
* PrimeReact UI components are expertly engineered, respecting the ground design principles of React like SFC (stateless functional components)
* Leaving UI engineering to exports, development teams focus their efforts on delivering business solutions.
* Provides excellent getting started documentation, speeds up onboarding new developers on projects.

## About the structure 

Following a kind of MVC pattern you will see..

1. car-view - React JS UI components only. During maven build lifecycle it runs npm install to download React components, finally webpack to generate a buildle.js to be included on the Springboot Controller
2. car-controller - Springboot WEB component, acts as a kind of traffic controller between the ReactJS UI and Springboot REST API backends. Maven copies the bundle.js resource from the view into the Spring MVC static content folder.

## Design your own company look and feel with SASS and Theme Designer

* [Theming](https://www.primefaces.org/primereact/#/theming)
* [Theme Designer API - online design your theme](https://www.primefaces.org/designer/primereact)

## flyway

* [How to configure Flyway database migrations](https://dev.to/gabriela/spring-boot-rest-api-and-flyway-migrations-a3a)
* [The flyway plugin](https://flywaydb.org/documentation/maven/)
* [baeldung](https://www.baeldung.com/database-migrations-with-flyway)
* [Best till now](https://www.callicoder.com/spring-boot-flyway-database-migration-example/)
* [Best H2 docs](https://www.devglan.com/spring-boot/spring-boot-h2-database-example)
* [DDL and H2](https://howtodoinjava.com/spring-boot2/h2-database-example/)

## Testing

* [Expained](https://www.baeldung.com/spring-boot-testing)
* [Examples](https://github.com/eugenp/tutorials/tree/master/spring-boot)
* [Guide to testing RestTemplate and hamcrast](https://www.baeldung.com/rest-template)
* [The best GITHUB on this you can find](https://github.com/eugenp/tutorials/tree/master/spring-resttemplate)

## Run

```
mvn spring-boot:run  -Dspring-boot.run.profiles=dev
```

## profile

* [profiles and property files](https://mkyong.com/spring-boot/spring-boot-profile-based-properties-and-yaml-example/)
* []()

## References and docus

* [Getting started with Prime React](https://create-react-app.dev/docs/getting-started)
* [Setting up your tools](https://create-react-app.dev/docs/setting-up-your-editor)
* [Integration with API backends](https://create-react-app.dev/docs/proxying-api-requests-in-development)
* [Integration with Storybooks](https://create-react-app.dev/docs/developing-components-in-isolation)


