def merge(intervals):

    intervals.sort()

    result = []

    for interval in intervals:

        if len(result) == 0:
            result.append(interval)

        elif interval[0] <= result[-1][1]:

            result[-1][1] = max(result[-1][1], interval[1])

        else:
            result.append(interval)

    return result