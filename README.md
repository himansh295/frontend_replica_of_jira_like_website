# HUV19.0 HTML CSS Final Assignment

HUV19.0 HTML CSS Final Assignment


## Follow the below steps to run the project:
#### Open terminal and follow the following commands-
1. Fork the repository
2. Clone the repository
3. `cd huv19.0-html-css-final-assignment`
4. `npm i`
5. `npm start`


#### Your application is running on:
`http://localhost:1234/`

## To get started:
- `Edit issue-list.html`
- `Add data in mock.json suitable to you to render in HTML file`

## Docker Image Build Command
`docker build -t html_css_final_assignment .`
## Docker Image Run Command
`docker run -p 8000:80 html_css_final_assignment`
## Push the docker image to Portus

1. Login to Portus: `docker login portus.hashedin.com`

2. Tag the image: `docker tag html_css_final_assignment:latest portus.hashedin.com/<namespace>/html_css_final_assignment:latest`

3. Push the image: `docker push portus.hashedin.com/<namespace>/html_css_final_assignment:latest`