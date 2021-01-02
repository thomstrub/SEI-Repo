



while color != 'quit':
    color = input('Enter "green", "yellow", "red": ').lower()
    print(f'The user entered {color}')


    if color == 'green':
        print('go')
    elif color == 'yellow':
        print('slow down')
    elif color == 'red':
        print('stop')
    else: 
        print('bogus')


# names = ["Tom", "Deborah", "Murray", "Axel"]

for name in names:
#   print(name)
  name = name + " roses"
  
  if name == "Tom roses":
      print(name)
      name = name + " lily"

  print(name)

new_band = 'phish'