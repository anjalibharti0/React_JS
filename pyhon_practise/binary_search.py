def binary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2

        if arr[mid] == target:
            return mid

        elif arr[mid] < target:
            low = mid + 1

        else:
            high = mid - 1

    return -1


arr = [10, 20, 30, 40, 50, 60, 70]
print(binary_search(arr, 60))



def binary_search(arr,target):
    low=0
    high=len(arr)-1
    while(low<=high):
        mid=(low+high)//2
        if arr[mid]==target:
            return mid
        if arr[mid]<target:
            low=mid+1
        else:
            high=mid-1
    return -1
arr=[89,43,32,32,21,31,89,90]
key=int(input("enter the value"))
print(binary_search(arr,key))