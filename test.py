def solution(dividend, divisor):
    result = dividend
    count = 0
    if divisor > 0:
        while result > 0:
            result = result - divisor
            if (result >= 0):
                count +=1
    elif divisor < 0:
        result = dividend - (dividend*2)
        divisor = -divisor
        while result < 0:
            result = result + divisor
            print(result)
            if (result <= 0):
                count -=1
    return (count)

print (solution(12, -2))