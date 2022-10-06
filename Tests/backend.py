import requests

url = "http://127.0.0.1:8000/api/users"

user = "user"
password = "userpassword"
#
# response = requests.get(url)
# print(response)

def default_auth():
    session = requests.Session()
    session.auth = (user, password)

    auth = session.post("http://127.0.0.1:8000/api")
    response = session.get(url)
    return response.text

def token_aut():
    _url = "http://127.0.0.1:8000/api-token/"
    body = {"username": user, "password": password}
    print()
    token = requests.post(_url, data=body)
    return token.text


text = token_aut()
print(text)