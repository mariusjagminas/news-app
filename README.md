# NewsApp

The latest news from over 15,000 different sources.
Users can search for the latest news by entering keywords or selecting from categories

This project was built with :
* [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.
* [Currents API](https://currentsapi.services/en)

## Development

### Prerequisites

To use this project on the local computer, you must obtain the [API key](https://currentsapi.services/en/register) from Currents API.

### Installation

1. Clone the project on your local machine.

      ```
      https://github.com/mariusjagminas/news-app.git
      ```

2. Navigate into news-app directory.

    ```
    cd news-app
    ```

3. Install all dependencies.

    ```
    npm install
    ```

4. Create environment.ts file in environments directory

5. Export environment variable with obtained API key.

    ```
    export const environment = {
      production: false,
      apiKey: [Currents API key: string],
    };
    ```

6. Create environment.prod.ts file in environments directory

7. Export environment variable with  API key.

    ```
    export const environment = {
      production: true,
      apiKey: [Currents API key: string],
    };
    ```
8. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


