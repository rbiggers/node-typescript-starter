FROM node:12.6.0-alpine as build

RUN apk upgrade -U

# Create app directory
WORKDIR /app

# Dependency files that can be cached easily.
COPY package.json yarn.lock ./
RUN yarn install

# Copy files related to builds/tests
COPY .eslintrc.js .prettierrc.js tsconfig* ./

# Copy Source Code
COPY src ./src

# Run Unit Tests
RUN yarn run test:unit --passWithNoTests

# Build the application
RUN yarn run build

# Remove Developer dependencies to decrease final image size.
# https://github.com/yarnpkg/yarn/issues/696
# yarn install --production --ignore-scripts --prefer-offline == npm prune --production 
RUN yarn install --production --ignore-scripts --prefer-offline

###########################################################################################

# Create a second docker image to make a more compact build.
FROM node:10-alpine as executable

# Switch User
USER nobody

# Create app directory
WORKDIR /app

# Copy the prebuild version of the application without the baggage of prevoious layers.
COPY --from=build /app /app

ENTRYPOINT [ "yarn", "run", "start:prod" ]
