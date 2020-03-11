FROM cypress/included:4.1.0
# FROM cypress/base:10

# COPY package.json package.json
# RUN npm i

COPY ./cypress.json ./cypress.json
COPY ./cypress ./cypress

COPY index.html index.html
COPY about.html about.html
COPY contact.html contact.html

# RUN npx cypress run --record --key cb22acd3-1231-4b94-8878-ed44fc0fa0ba