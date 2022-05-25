# RESTful API Astronomy Pictures

RESTful API for the input of Astronomy pictures provided by [Astronomy Picture of the Day (APOD) microservice](https://github.com/nasa/apod-api/blob/master/README.md).

## Table of contents
1. [Environment](#environment)
2. [Documentation](#documentation)
   1. [Endpoint](#endpoint)
   2. [HTTP methods](#http-methods)
3. [Author](#author)

## Environment <a name="environment"></a>

1. Clone the repo
```bash
git clone https://github.com/Jorgemayor/RESTful-API-astronomy-pictures.git
```
2. `cd` into the new directory
```bash
cd RESTful-API-astronomy-pictures
```
3. Install needed dependencies
```bash
npm install
```

## Documentation <a name="documentation"></a>

### Endpoint: `/pictures` <a name="endpoint"></a>

There is only one endpoint in this service.

### HTTP methods <a name="http-methods"></a>

- GET - Takes several optional URL search params or the id of a picture.
- POST - Takes a body in the JSON format to create a picture.
- PATCH - Takes a body in the JSON format to update a picture and its id.
- DELETE - Takes a picture id to delete it.

#### URL Search Params for GET method

These params are used to paginate and filter the result.

- `limit` Number of rows per page (10 by default). 
- `page` Page to return (1 by default).
- `title` Filter by title. Case-insensitive.
- `explanation` Filter by explanation. Case-insensitive.
- `url` Filter by URL.
- `hdurl` Filter by HDURL.

**Returned fields**

- `id` Id if of the image.
- `title` The title of the image.
- `url` The URL of the APOD image or video of the day.
- `hdurl` The URL for any high-resolution image.
- `explanation` The supplied text explanation of the image.

All these fields (except the id) are needed at the moment of the creation of an image.

**Examples**

```bash
localhost:5000/pictures?limit=15&page=1
```

```bash
localhost:5000/pictures?limit=5&explanation=planet&title=mars
```

## Author <a name="author"></a>
- Jorge Eduardo Mayor - [Jorgemayor](https://github.com/Jorgemayor)
