import re
N = int(input("Number:  "))

def credit(N):
  seconds = []
  rests = []
  arr = [int(x) for x in str(N)]
  i = len(arr) - 2
  while(i>=0):
    i -= 2
    arr[i] = arr[i]*2
    if arr[i]>10:
      seconds.append(int(str(arr[i])[0]))
      seconds.append(int(str(arr[i])[1]))
    else:
      seconds.append(arr[i])
  j = len(arr)-1
  while(j>=0):
    j -=2
    rests.append(arr[j])
  if (sum(seconds)+ sum(rests))%10 == 0:
    if re.match(r"^4", str(N)):
        print("VISA")
    elif re.match(r"^3[4|7]", str(N)):
        print("MASTERCARD")
    else:
        print("AMAX")
  else:
    print(False)


credit(N)

