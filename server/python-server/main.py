from flask import Flask
from settings import *
import requests


app = Flask(__name__)

@app.route('/api/v/1/getItems')
def getItems():
  headers = {"Shop-Key": shopKey}
  url = 'https://easydonate.ru/api/v3/shop/products'
  r = requests.get(url, headers=headers)

  return r.json()

@app.route('/api/v/1/servers')
def servers():
  headers = {"Shop-Key": shopKey}
  url = 'https://easydonate.ru/api/v3/shop/servers'
  r = requests.get(url, headers=headers)

  return r.json()

@app.route('/api/v/1/serverInfo/<id>')
def serverInfo(id):
  headers = {"Shop-Key": shopKey}
  url = 'https://easydonate.ru/api/v3/shop/server/'  + id
  r = requests.get(url, headers=headers)

  return r.json()

@app.route('/api/v/1/payments')
def payments():
  headers = {"Shop-Key": shopKey}
  url = 'https://easydonate.ru/api/v3/shop/payments'
  r = requests.get(url, headers=headers)

  return r.json()

if __name__ == '__main__':
    app.run(debug=debug, port=server_port)