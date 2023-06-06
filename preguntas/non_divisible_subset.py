S= [19, 10, 12, 24, 25, 22]
aux=S
k = 4
# for i in range(len(S)-1):
#     print("------------------------------")
#     for j in S[i+1:len(S)]:
#         print(S[i],"+",j,"=",S[i]+j)
#         suma=S[i]+j
#         Residuo= suma%k
        
#         if Residuo==0:
#             pivote=aux[j]
#             aux2[]
#             aux.remove(j)
#     print(len(aux))

for index in range(k):
    dict[index] = 0
for num in s:
    dict[num % k] += 1

if dict[0] == 0:
    r = 0
else:
    r = 1

for i in range(1, k//2+1):
    if (i != k - i):
        r += max(dict[i], dict[k-i])
    else:
        r += 1

return r