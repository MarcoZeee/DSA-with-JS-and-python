import re
text = str(input("Insert the text here"))

def readability(text):
  words = re.findall(r"[A-Z]*[a-z]+", text)
  sentences = re.findall(r"[\.!?]", text)
  letters = re.findall(r"[A-Za-z]", text)
  L = len(letters) * (100/(len(words)))
  S = len(sentences) * (100/(len(words)))
  grade = 0.0588 * L - 0.296 * S - 15.8
  return f"Grade {round(grade)}"


print(readability(text))

