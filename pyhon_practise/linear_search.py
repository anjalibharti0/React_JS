

def linear_search(arr,key):
    for i in range(len(arr)):
        if(arr[i]==key):
            return i
    return -1

arr=[23,34,534,34,32,3]
key=34       
print(linear_search(arr,key))