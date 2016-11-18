from requests import Request, Session

s = Session()

data = {
    "autoresponder": 1,
    "from": "abimees.abimees@gmail.com",
    "from_name": "ABIMEES",
    "addresses": [{"email": "arneriso@gmail.com"},],
    ""
}

req = Request('POST', 'https://icvh9esb.sendsmaily.net/api/autoresponder.php', data=data, auth=("abimees.abimees@gmail.com","abimees123"))

prepped = req.prepare()

resp = s.send(prepped)

print(resp.status_code)