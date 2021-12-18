
def binarySearch():
	arr = [1,2,3,4,5,6,7,8,9,10]
	low = 0
	high = len(arr) - 1
	target = 8
	print("binary searching through array: " + str(arr) + " for target " + str(target))

	while low < high:
		mid = low + (high-low)//2
		if arr[mid] == target:
			print("found target at index: " + str(mid))
			break
		if arr[mid] < target:
			low = mid+1
		else:
			high = mid-1


def selectionSort(arr):
	def findSmallest(arr):
		smallest = arr[0]
		smallest_index = 0
		for i in range(1,len(arr)):
			if arr[i] < smallest:
				smallest = arr[i]
				smallest_index = i
		return smallest_index
	res = []
	print("now using selection sort to sort the array: " + str(arr))
	for i in range(len(arr)):
		smallest = findSmallest(arr)
		res.append(arr.pop(smallest))
	print("sorted to: " + str(res))
	return res

if __name__ == "__main__":
	selectionSort([1,4,5,2,3,2])
