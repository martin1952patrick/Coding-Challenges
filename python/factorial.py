#First Factorial
#Have the function FirstFactorial(num) take the num parameter being passed 
#and return the factorial of it. For example: if num = 4, then your program 
#should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be 
#between 1 and 18 and the input will always be an integer. 



def FirstFactorial(num):
    #num = input("4")
    if num == 1:
      return 1
    else:
        return num * FirstFactorial(num-1)


#print(FirstFactorial(input()))
print(FirstFactorial(int(input()))) #if you want to put a number to get result

#print(FirstFactorial(4)) ## if you want result for fixed values