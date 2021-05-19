# Callback url

## API

### GET

```
GET /callback
```

### POST

```
POST /callback
```

## Usage

Run heroku logs

```
heroku logs --tail
```

Perform example request

```
curl --header "Content-Type: application/json" \
  --request POST \
  --data request.json \
  https://applicant-callback-url.herokuapp.com/callback
```
