# Angular Test

## Description

> Angular App Transaction test for Vyne. 

## Adictional COnsiderations

> Task Time box: it took 1/2 day = 4 hours. There is margin for improvements. 

-----

# Run App

```
// npm run storybook
// http://localhost:6006
yarn storybook --debug-webpack

// run Angular App
// http://localhost:4200/
ng serve -o --poll=2000
```

```
// To Speed-up Development I setup a local Mock API server with CORS
http://localhost:3001/swagger-ui
```

----

## Essential Corporate Vyne colours pattern (global styles)

```js
// styles.scss
.global_style {
    vy_extra_dark_putple: #0c0128;
    vy_dark_purple: #6c56f5;
    vy_light_purple:  #6c56f9;
    vy_light_red: #900573;
    vy_dark_red: #850257;
    vy_green: #606701;
    vy_black: #000;
}
```

----

## Responsive Layout Consideration 

> Created a `3x3 grid` with named areas for the: header, navigation, content, sidebar, and footer (grid-template-areas)

> Created responsive layout based on: `Small Screens` (Mobile) @media (max-width: 576px), `Medium Screens` (Tablets) @media (min-width: 577px) and (max-width: 1024px) and `Large Screens` (PCs) @media (min-width: 1025px) enforced with Responsive StoryBook addOns for easy visual testing

> Enforced responsiveness content: usign flexible `measure units intead px`, using font-type with modern `clamp()`, and (experimental) `aspect-ratio:` to setup preferred aspect ratio for the container wrapper box, which will be used in the calculation of auto sizes. 

> `Inner table scrollable` horizontally, to improve UX on smaller screens

> Implemented `.browserslistrc` to ensure that your `CSS code is compatible with the browsers that you want to support`. This is a great way to ensure that you don't have to worry about browser compatibility issues. The list can be improved for this project but I wanted to start with a simple setup based on the Global Stats StatCounter (`https://gs.statcounter.com/`)


----

### Design View / Diferent viewports 

```html
// Small Screens (Mobile)
+-----------+
|  header   |
+-----------+
|   nav     |
+-----------+
|  CONTENT  |
+-----------+
|   side    |
+-----------+
|  footer   |
+-----------+
```

```html
// Medium Screens (Tablets)
+-----------+-----------+
|  header   |  header   |
+-----------+-----------+
|   nav     |  CONTENT  |
+-----------+-----------+
|   side    |  footer   |
+-----------+-----------+
```


```html
// Large Screens (PCs)
+-----------+-----------+-----------+
|  header   |  header   |  header   |
+-----------+-----------+-----------+
|   nav     |  CONTENT  |   side    |
+-----------+-----------+-----------+
|  footer   |  footer   |  footer   |
+-----------+-----------+-----------+
```

----

### Architecture considerations

> Follow layered achitecture, `Smart Component and Presentational Component` are separated. Data Access is separated from the UI and Shared reusable parts will be shared across multiple parts of the application. This architecture enforced `Separation of Concerns`, `Dependency Injection`, `Single Responsibility Principle` and `Modularisation`. I made an small concession to use a modern `Signal` as a reactive construct to avoid the need of a `Subject` to communicate between the components.

> `ChangeDetection strategy` is set OnPush. Component are detach from the detection cycle. This is a great way to improve performance and reduce the amount of work that Angular has to do. An step forward, could be `zoneless` rendering. Specially, using Signal could make a perfomance impact as the application could become more smart and granullar. This strategy will encorage pure functional components that will lead to a more performant and predictable application. (TODO: implement `zoneless` rendering for a fully detached)

> `Lazy Loading` is used to load the modules only when they are needed. This is a great way to improve performance and reduce the amount of work

----

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

