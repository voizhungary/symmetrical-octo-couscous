# symmetrical-octo-couscous

This is a DevOps test repository.

## Configuration

### Database config

The database can be any MySQL compatible database engine, preferably MariaDB. The necessary structure is described in `sql` folder. The `sql/create.sql` script can be used the create the table and the `sql/insert.sql` script seeds the table with initial values.

The connection details must be given in the following format as environment variables:

```
DB_HOST=123.108.100.8
DB_PORT=3306
DB_USER=user
DB_PASS=pass
```

### Environment

To switch between production or development environment, use the `NODE_ENV` env variable:

```
NODE_ENV=development
```

In development environment an additional endpoint is available on the app.

## Scripts

Install the dependencies:

```bash
npm ci
```

Run the linter:

```bash
npm run lint
```

Run the tests:

```bash
npm run test
```

Build the Typescript files:

```bash
npm run build
```

Run the service:

```bash
npm run start
```

## Workflow

Fork the repository and send a pull request after completing the followings:

- Create a database as mentioned above. You can both use AWS managed database or deploy your own in a container. This part doesn't have to be too complicated (yet).

- Package the NodeJS application in a Docker container. If the installation, testing and linting was successful then publish the Docker image to the AWS Elastic Container Registry and deploy it to the AWS ECS. Make sure auto scaling is set up properly.

- Make sure the app receives the required env variables.

- Make sure you use proper secret management everywhere to protect sensitive informations (passwords, keys).

- Use Github Actions to automate the process. When a pull request is opened the whole workflow for the app (don't worry about the database here) must run again. The same should happen in case if a pull request gets updated (for example previous deploy failed, so a new fix is pushed to the branch).

- Please provide a production and a development setup as well (incorporate the above mentioned `NODE_ENV` variable). What kind of differences would you make between the two setups and why?
