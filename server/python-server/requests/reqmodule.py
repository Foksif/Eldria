import requests

# Get all items

def getItems(shopKey):
  headers = {"Shop-Key": shopKey}
  url = 'https://easydonate.ru/api/v3/shop/products'
  r = requests.get(url, headers=headers)

  return r.text

# Servers DATA

def servers(shopKey):
  headers = {"Shop-Key": shopKey}
  url = 'https://easydonate.ru/api/v3/shop/servers'
  r = requests.get(url, headers=headers)

  return r.text

def serverInfo(shopKey, id):
  headers = {"Shop-Key": shopKey}
  url = 'https://easydonate.ru/api/v3/shop/server/'  + id
  r = requests.get(url, headers=headers)

  return r.text

# Payments data

def payments(shopKey):
  headers = {"Shop-Key": shopKey}
  url = 'https://easydonate.ru/api/v3/shop/payments'
  r = requests.get(url, headers=headers)

  return r.text

def paymentCreate(shopKey, customer, server_id, products, success_url):
  headers = {"Shop-Key": shopKey}
  load = '?customer=' + customer + '&server_id=' + server_id + '&products=' + products + '&success_url=' + success_url
  url = 'https://easydonate.ru/api/v3/shop/payment/create' + load
  r = requests.get(url, headers=headers)

  return r.text


print(paymentCreate('aa22ffa4bce5328a7782b8af738bb999', 'Foks_f', '36047', '{"319933": 1}', 'https:\/\/localhost.io'))
