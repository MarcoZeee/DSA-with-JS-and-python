
import re
text = 'hello, world'
pattern = 'YTNSHKVEFXRBAUQZCLWDMIPGJO'

def cipher(text, pattern):
  pattern_list = [char for char in pattern]
  alphabet_list = list("abcdefghijklmnopqrstuvwxyz")
  new_text = []
  if len(alphabet_list)!= 26 or type(text)!= str:
    print("Invalid pattern or text is not string")
  
  for letter in text:
    for i in range(len(alphabet_list)):
      if letter.lower() == alphabet_list[i]:
        new_text.append(pattern_list[i])
    if re.search(r"\W", letter):
      new_text.append(letter)
  if(text.lower()== text):
    print(''.join(new_text).lower())
  else:
    print(''.join(new_text))

    


cipher(text, pattern)